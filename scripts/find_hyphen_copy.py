import re
from pathlib import Path
root = Path(__file__).resolve().parent.parent
pattern = re.compile(r'[\u2013\u2014-]')
string_pattern = re.compile(r'(?P<quote>["\'`])(?P<text>.*?)(?P=quote)', re.S)
for path in sorted(root.rglob('*.tsx')):
    text = path.read_text(encoding='utf-8')
    for match in string_pattern.finditer(text):
        s = match.group('text')
        if pattern.search(s):
            line = text.count('\n', 0, match.start()) + 1
            print(f'{path}:{line}: {repr(s)}')
