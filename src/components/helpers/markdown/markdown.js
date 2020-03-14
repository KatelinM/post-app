import rules from "./rules";

function renderMarkdownPreview(text) {
    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        text = text.replace(rule.pattern, rule.replacement);
    }

    return text;
}

export default renderMarkdownPreview