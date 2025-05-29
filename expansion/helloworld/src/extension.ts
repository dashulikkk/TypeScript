import * as vscode from 'vscode';
import markdownItContainer from 'markdown-it-container';
import markdownItEmoji from 'markdown-it-emoji';

export function activate(context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md: any) {
      md.use(markdownItEmoji);

      md.use(markdownItContainer, 'alert', {
        validate: () => true,
        render: (tokens: any, idx: number) => {
          return tokens[idx].nesting === 1 ? '<div class="alert">' : '</div>';
        }
      });

      md.use(markdownItContainer, 'spoiler', {
        marker: '?',
        validate: () => true,
        render: (tokens: any, idx: number) => {
          if (tokens[idx].nesting === 1) {
            const info = tokens[idx].info.trim().slice('spoiler'.length).trim();
            const summary = info ? info.replace(/^"(.*)"$/, '$1') : 'Spoiler';
            return `<div class="spoiler"><details><summary>${summary}</summary>\n`;
          } else {
            return '</details></div>\n';
          }
        }
      });

      return md;
    }
  };
}
