export enum ModuleItemType {
    Page = "wiki_page",
    Assignment = "Assignment",
    File = "File",
    Discussion = "Discussion",
    Quiz = "Quiz",
    SubHeader = "SubHeader",
    ExternalUrl = "ExternalUrl",
    ExternalTool = "ExternalTool"
}

export class ModuleItem {
    title: string;
    type: ModuleItemType;
    contentId?: number;
    position?: number;
    indent?: number;
    pageUrl?: string;
    externalUrl?: string;
    newTab?: boolean;

    constructor(title: string, type: ModuleItemType, contentId?: number, position?: number, indent?: number, pageUrl?: string, externalUrl?: string, newTab?: boolean) {
        this.title = title;
        this.type = type;
        this.contentId = contentId;
        this.position = position;
        this.indent = indent;
        this.pageUrl = pageUrl;
        this.externalUrl = externalUrl;
        this.newTab = newTab;
    }

    static pageModuleItem(title: string, contentId: number, pageUrl: string) {
        return new ModuleItem(title, ModuleItemType.Page, contentId, undefined, undefined, pageUrl);
    }


    static createAssignmentItem(title: string, assignmentCanvasId: number): ModuleItem {
        return new ModuleItem(title, ModuleItemType.Assignment, assignmentCanvasId);
    }


    static createSubHeaderItem(title: string, indent?: number): any {
        return new ModuleItem(title, ModuleItemType.SubHeader, undefined, undefined, indent);
    }


    static createExternalUrlItem(title: string, externalUrl: any): any {
        return new ModuleItem(title, ModuleItemType.ExternalUrl, undefined, undefined, undefined, undefined, externalUrl);
    }


    /**
     * Converts a ModuleItem object to FormData.
     * @param moduleItem - The ModuleItem object to convert.
     * @returns The FormData object representing the ModuleItem.
     */
    static toFormData(moduleItem: ModuleItem) {
        let formdata = new FormData();
        if (moduleItem.title) formdata.append("module_item[title]", moduleItem.title);
        formdata.append("module_item[type]", moduleItem.type);
        if (moduleItem.contentId) formdata.append("module_item[content_id]", moduleItem.contentId.toString());
        if (moduleItem.position) formdata.append("module_item[position]", moduleItem.position.toString());
        if (moduleItem.indent) formdata.append("module_item[indent]", moduleItem.indent.toString());
        if (moduleItem.pageUrl) formdata.append("module_item[page_url]", moduleItem.pageUrl);
        if (moduleItem.externalUrl) formdata.append("module_item[external_url]", moduleItem.externalUrl);
        if (moduleItem.newTab) formdata.append("module_item[new_tab]", moduleItem.newTab.toString());
        return formdata;
    }
}