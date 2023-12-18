
export interface Result {
    timestamp: string;
    milestones: Map<string, Milestone>;
}

export interface ResultLatest {
    timestamp: string;
    channels: Map<string, Milestone>;
}

export interface Milestone {
    milestone: string;
    version: string;
    revision: string;
    channel: string;
    // string: chrome, chromedriver, chrome-headless-shell
    downloads: Map<string, DownloadUrl[]>;
}

export interface DownloadUrl {
    platform: string;
    url: string;
}

export enum App {
    chrome,
    chromedriver,
    chromeHeadlessShell

}
