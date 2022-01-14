declare global {
    const assistant: Info;

    const app: App;

    const thread: Thread;

    const accessibility: Accessibility

    interface Assistant {
        /**
         * 版本相关
         * @since 1.0.0
         */
        readonly version: Info

        /**
         * 系统软件相关
         * @since 1.0.0
         */
        readonly app: App

        /**
         * 线程相关
         * @since 1.0.0
         */
        readonly thread: Thread

        /**
         * 无障碍服务
         * @since 1.0.0
         */
        readonly accessibility: Accessibility

        /**
         * 设备相关
         * @since 1.0.0
         */
        readonly device: Device

        /**
         * 依赖相关
         * @since 1.0.0
         */
        readonly depends: Depends

        /**
         * UI提示相关
         * @since 1.0.0
         */
        readonly widgets: Widgets;

        /**
         * 存储相关
         * @since 1.0.0
         */
        readonly storage: Storage;

        /**
         * 主函数入口
         *
         * @since 1.0.0
         */
        main?: () => Promise<void>
    }

    interface Widgets {
        /**
         * 显示一个小的提示信息
         * @param text 文本内容
         * @since 1.0.0
         */
        toast(text: string): void;
    }

    /**
     * 插件依赖相关
     * @since 1.0.0
     */
    interface Depends {
        /**
         * 运行一个依赖插件
         * @param name 插件配置中的名称
         * @since 1.0.0
         */
        launch(name: string): void;
    }

    /**
     * 版本信息
     * @since 1.0.0
     */
    interface Info {
        /**
         * 获取点击助手版本号：语义版本号
         * @since 1.0.0
         */
        readonly versionName: string

    /**
     * 获取点击助手版本号：整数类型
     * @since 1.0.0
     */
    readonly versionCode: number;

        /**
         * 获取引擎的版本号
         * @since 1.0.0
         */
        readonly engineVersion: string;

    /**
     * 主函数入口
         *
     * @since 1.0.0
     */
    main?: () => Promise<void>
}

/**
 * 软件相关
 * @since 1.0.0
 */
interface App {

        /**
         * 打开一个已经安装的软件
         *
         * @param package 软件包名
         * @since 1.0.0
         */
        run(package: string): void;

        /**
         * 软件是否安装
         * @param package 软件包名
         * @since 1.0.0
         */
        isInstalled(package: string): boolean;

        /**
         * 显示一个小的提示信息
         * @param text 文本内容
         * @since 1.0.0
         */
        toast(text: string): void;
    }

/**
 * 线程相关
 * @since 1.0.0
 */
interface Thread {
    /**
     * 线程睡眠
     * @param duration 单位：毫秒
     * @since 1.0.0
     */
    sleep(duration: number): void;
}

/**
 * 无障碍权限相关功能
 * @since 1.0.0
 */
interface Accessibility {

    /**
     * 按键相关
     * @since 1.0.0
     */
    readonly action: AccessibilityAction

    /**
     * 获取当前界面全部节点
     * @since 1.0.0
     */
    findAll(): AccessibilityNodeInfo[];

    /**
     * 根据ID获取界面元素
     * @param id 元素ID
     * @since 1.0.0
     */
    findByViewId(id: string): AccessibilityNodeInfo[];

    /**
     * 根据内容获取界面元素
     * @param text 元素内容
     * @since 1.0.0
     */
    findByViewText(text: string): AccessibilityNodeInfo[];

    /**
     * 等待一个元素出现
     * @param timeout 等待超时时间 单位：毫秒 默认：15000
     * @since 1.0.0
     * @throws 等待超时将抛出异常
     */
    wait(param: AccessibilityWaitBean, timeout?: number): AccessibilityNodeInfo[];

    /**
     * 等到一个元素出现
     * @param viewId view id
     * @param timeout 等待超时时间 单位：毫秒 默认：15000
     * @throws 如果超时将抛出异常
     */
    waitByViewId(viewId: string, timeout?: number): AccessibilityNodeInfo;

    /**
     * 等待一个界面出现
     * @param activityPackageName activity的完整包名
     * @param timeout 等待超时时间 单位：毫秒 默认：15000
     * @throws 如果超时将抛出异常
     */
    waitByActivity(activityPackageName: string, timeout?: number): void;


}

/**
 * 在使用过程中必须有一个有效的属性
 * @since 1.0.0
 */
interface AccessibilityWaitBean {
    /**
     * resource-id 字段
     * @since 1.0.0
     */
    id?: string | undefined

    /**
     * text 字段
     * @since 1.0.0
     */
    text?: string | undefined

    /**
     * class字段
     * @since 1.0.0
     */
    class?: string | undefined

    /**
     * content-desc
     * @since 1.0.0
     */
    desc?: string | undefined

    /**
     * clickable
     * @since 1.0.0
     */
    clickable?: boolean | undefined

    /**
     * enabled
     * @since 1.0.0
     */
    enabled?: boolean | undefined
}

/**
 * @since 1.0.0
 */
interface AccessibilityAction {

    /**
     * 模拟按下：主页键
     * @since 1.0.0
     */
    home(): void;

    /**
     * 模拟按下：返回
     * @since 1.0.0
     */
    back(): void;

    /**
     * 拉出通知栏
     * @since 1.0.0
     */
    notifications(): void;

    /**
     * 显示快速设置(下拉通知栏到底)
     * @since 1.0.0
     */
    quickSettings(): void;

    /**
     * 弹出电源键菜单
     * @since 1.0.0
     */
    powerDialog(): void;

    /**
     * @since 1.0.0
     */
    recents(): void;

    /**
     * @since 1.0.0
     */
    lockScreen(): void;

    /**
     * @since 1.0.0
     */
    takeScreenshot(): void;
}

/**
 * 无障碍元素
 * @since 1.0.0
 */
interface AccessibilityNodeInfo {
    /**
     * 执行操作
     * @param action 操作ID
     * @since 1.0.0
     */
    action(action: number): void;

    /**
     * 执行点击动作
     * @since 1.0.0
     */
    click(): void;

    /**
     * 是否选中状态
     * @since 1.0.0
     */
    isChecked(): boolean;
}

interface Device {
    readonly build: DeviceBuild
    readonly os: DeviceOs
}

interface DeviceBuild {
    readonly board: string
    readonly manufacturer: string
    readonly model: string
    readonly fingerprint: string
}

interface DeviceOs {
    /**
     * 当前手机系统的名称
     * 一般有：miui、color_os等
     * 并不是所有的系统都能正常识别
     * @since 1.0.0
     */
    readonly name: string
}

interface Assistant {
    /**
     * 版本相关
     * @since 1.0.0
     */
    readonly version: Version

    /**
     * 系统软件相关
     * @since 1.0.0
     */
    readonly app: App

    /**
     * 线程相关
     * @since 1.0.0
     */
    readonly thread: Thread

    /**
     * 无障碍服务
     * @since 1.0.0
     */
    readonly accessibility: Accessibility

    /**
     * 设备相关
     * @since 1.0.0
     */
    readonly device: Device
}

declare global {
    var assistant: Assistant
}

export = global
