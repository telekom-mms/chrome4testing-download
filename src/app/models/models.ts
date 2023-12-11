
export interface Result {
    timestamp: string;
    milestones: Map<string, Milestone>;
}

export interface Milestone {
    milestone: string
    version: string
    revision: string
    downloads: Map<App, Download>
}

export interface Download {
    platform: string;
    url: string;
}

enum App {
    chrome,
    chromedriver,
    chromeHeadlessShell

}
