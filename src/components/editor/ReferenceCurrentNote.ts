import BMOGPT, { BMOSettings } from 'src/main';

let referenceCurrentNoteContent = '';

export async function getActiveFileContent(plugin: BMOGPT, settings: BMOSettings) {
    referenceCurrentNoteContent = '';
    const activeFile = plugin.app.workspace.getActiveFile();
    if (activeFile?.extension === 'md') {
        const content = await plugin.app.vault.read(activeFile);
        const clearYamlContent = content.replace(/---[\s\S]+?---/, '').trim();
        referenceCurrentNoteContent = '\n\n' + 'Additional Note:' + '\n\n' + clearYamlContent + '\n\n';
    }
    return referenceCurrentNoteContent;
}

export function getCurrentNoteContent() {
    return referenceCurrentNoteContent;
}