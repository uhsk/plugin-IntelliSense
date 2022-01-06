declare global {
    let assistant: Assistant;

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

        /**
         * 主函数入口
         *
         * @since 1.0.0
         */
        main?: () => Promise<void>
    }

    /**
     * 版本信息
     * @since 1.0.0
     */
    interface Version {
        /**
         * 获取点击助手版本号：语义版本号
         * @since 1.0.0
         */
        readonly name: string

        /**
         * 获取点击助手版本号：整数类型
         * @since 1.0.0
         */
        readonly code: number;

        /**
         * 获取V8引擎的版本号
         * @since 1.0.0
         */
        readonly v8: string;
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
    }

    /**
     * 线程相关
     * @since 1.0.0
     */
    interface Thread {
        /**
         * 线程睡眠
         * @param duration 睡眠时长：毫秒
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
        all(): AccessibilityNodeInfo[];

        /**
         * 查抄页面元素
         * @param param     元素内容
         * @param timeout   等待超时时间 单位：毫秒 默认：15000
         * @since 1.0.0
         */
        find(param: AccessibilityWaitBean, timeout?: number): AccessibilityNodeInfo[];

        /**
         * 等待一个元素出现
         * @param param     元素内容
         * @param timeout   等待超时时间 单位：毫秒 默认：15000
         * @since 1.0.0
         * @throws 等待超时将抛出异常
         */
        wait(param: AccessibilityWaitBean, timeout?: number): AccessibilityNodeInfo[];

        /**
         * 等待一个界面出现
         * @param activityPackageName activity的完整包名
         * @param timeout 等待超时时间 单位：毫秒 默认：15000
         * @throws 如果超时将抛出异常
         */
        waitActivity(activityPackageName: string, timeout?: number): void;

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
         * @since 1.0.0
         */
        readonly id?: string;
        readonly text?: string;
        readonly class?: string;
        readonly desc?: string;
        readonly clickable: boolean;
        readonly enabled: boolean;

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
        click(): boolean;

        /**
         * 是否选中状态
         * @since 1.0.0
         */
        isChecked(): boolean;

        /**
         * @since 1.0.0
         */
        parent(): AccessibilityNodeInfo | undefined;

        /**
         *
         * @param index
         * @since 1.0.0
         */
        child(index: number): AccessibilityNodeInfo | undefined;

        /**
         * @since 1.0.0
         */
        count(): number;
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


}

export = global
