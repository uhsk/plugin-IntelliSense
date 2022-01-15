declare global {
    const app: App;
    const plugin: Plugin;
    const thread: Thread;
    const accessibility: Accessibility;
    const device: Device;

    class Device {
        readonly build: DeviceBuild;
        readonly os: DeviceOs;
    }

    class DeviceBuild {
        readonly board: string;
        readonly bootloader: string;
        readonly brand: string;
        readonly device: string;
        readonly display: string;
        readonly fingerprint: string;
        readonly hardware: string;
        readonly host: string;
        readonly id: string;
        readonly manufacturer: string;
        readonly model: string;
        readonly product: string;
        readonly tags: string;
        readonly user: string;
        readonly version: DeviceBuildVersion;
    }

    class DeviceBuildVersion {
        readonly baseOs: string | null;
        readonly codeName: string;
        readonly incremental: string;
        readonly release: string;
        readonly sdk: number;
    }

    class DeviceOs {
        readonly name: string;
        readonly version: string;
    }

    interface App {
        get(pkg: string): AppGet;

        run(pkg: string): void;

        mine(): void;

        readonly version: AppVersion;
    }

    interface AppVersion {
        readonly name: string;
        readonly code: number;
        readonly engine: string;
    }

    class AppGet {
        readonly isInstalled: boolean;
        readonly versionName: string | null;
        readonly versionCode: number | null;

        launch(): void;
    }

    interface Plugin {
        main: () => Promise<void>;
        readonly depends: PluginDepends;
    }

    class PluginDepends {
        list(): PluginDependItem[];

        launch(name: string): void;
    }

    class PluginDependItem {
        readonly name: string;
        readonly repo: string;
        readonly version: string;
    }

    interface Thread {
        sleep(mills: number): void
    }

    class Accessibility {
        readonly actions: AccessibilityActions;

        wait(config: AccessibilityNodeConfig, timeout?: number): AccessibilityNodeBean[];

        waitActivity(name: string, timeout?: number): void;

    }

    class AccessibilityNodeConfig {
        readonly id?: string;
        readonly text?: string;
        readonly class?: string;
        readonly desc?: string;
        readonly clickable?: string;
        readonly enabled?: string;
        readonly package?: string;
    }

    class AccessibilityNodeBean {
        readonly id?: string;
        readonly text?: string;
        readonly class?: string;
        readonly desc?: string;
        readonly clickable?: string;
        readonly enabled?: string;

        click(): void;

        isChecked(): boolean;

        parent(): AccessibilityNodeBean | null;

        child(index: number): AccessibilityNodeBean | null;

        count(): number;
    }

    class AccessibilityActions {
        home(): boolean;

        back(): boolean;

        notifications(): boolean;

        powerDialog(): boolean;

        quickSettings(): boolean;

        recents(): boolean;

        takeScreenshot(): boolean;

        lockScreen(): boolean;
    }
}

export = global
