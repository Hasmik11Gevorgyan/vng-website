import sys

def check_tags(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
    
    stack = []
    import re
    # Match tags and capture line numbers
    tag_pattern = re.compile(r'<(/?)([a-zA-Z0-9]+)[^>]*?(/?)>')
    
    for i, line in enumerate(lines):
        line_num = i + 1
        for match in tag_pattern.finditer(line):
            closing = match.group(1) == '/'
            name = match.group(2).lower()
            self_slash = match.group(3) == '/'
            
            # Handle self-closing tags
            is_self_closing = self_slash or name in ['img', 'br', 'hr', 'input', 'link', 'meta', 'source', 'param', 'embed', 'area', 'col', 'track', 'wbr', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse', 'use', 'defs', 'lineargradient', 'stop', 'svg']
            
            if is_self_closing:
                if not closing:
                    continue
            
            if closing:
                if not stack:
                    print(f"L{line_num}: Unexpected closing tag </{name}>")
                else:
                    last_name, last_line = stack.pop()
                    if last_name != name:
                        print(f"L{line_num}: Mismatched tag: closed </{name}>, but last opened was <{last_name}> at L{last_line}")
            else:
                stack.append((name, line_num))
    
    for name, line in stack:
        print(f"Unclosed tag <{name}> at L{line}")

if __name__ == "__main__":
    check_tags(sys.argv[1])
