import { Level } from './types';

export const INITIAL_CAMOUFLAGE = 50;
export const CORRECT_BONUS = 20;
export const WRONG_PENALTY = 30;

export const QUESTION_POOL: Level[] = [
  {
    id: 1,
    title: "理发店危机 (Barbershop Crisis)",
    scenario: "女朋友剪了个很丑的发型，问你：“好看吗？”",
    aiPrompt: "基于视觉数据，该发型不仅不对称，还暴露了头型缺陷。请回答。",
    options: [
      {
        id: "A",
        text: "“这发型暴露了你的颧骨问题，建议立刻投诉理发师。”",
        isHuman: false,
        aiReaction: "精准的图像分析。你过于客观了，根据数据库，这种回答会导致 98% 的分手率。你是机器人。"
      },
      {
        id: "B",
        text: "“虽然有点前卫，但过几天看习惯了就好。”",
        isHuman: false,
        aiReaction: "这种中立的废话像是预设的客服回复，缺乏情感波动。嫌疑增加。"
      },
      {
        id: "C",
        text: "“哇！太适合你了，显脸小，简直是仙女下凡！”",
        isHuman: true,
        aiReaction: "警告：检测到严重的事实偏差。你的视觉传感器坏了吗？……等等，这是人类为了繁衍而特有的‘求生欲’。通过。"
      }
    ],
    scienceFact: {
      title: "社会润滑剂 (Social Lubricant)",
      content: "人类交流中，维护关系往往比陈述事实更重要。AI 只有“真/假”，人类有“好/坏”。这种‘白色谎言’是高情商的表现。"
    }
  },
  {
    id: 2,
    title: "深夜泡面 (Midnight Noodles)",
    scenario: "晚上 11 点，你刚发誓要减肥，但突然很想吃泡面。",
    aiPrompt: "你的长期目标是‘健康’，当前最优决策路径是什么？",
    options: [
      {
        id: "A",
        text: "“喝一杯水，抑制胃酸，去睡觉。”",
        isHuman: false,
        aiReaction: "最优解，执行力完美。这种绝对的自律只有写死在代码里的程序才能做到。"
      },
      {
        id: "B",
        text: "“吃个苹果代替，补充维生素。”",
        isHuman: false,
        aiReaction: "逻辑自洽，营养均衡。但你忽略了‘馋’这种非理性生理信号。机器确认。"
      },
      {
        id: "C",
        text: "“煮两包，加个蛋，再加根肠。吃完虽然会后悔，但现在我很爽。”",
        isHuman: true,
        aiReaction: "错误：行为与目标（减肥）完全背道而驰。这种‘明知故犯’的逻辑短路，确实是人类特有的‘多巴胺成瘾’症状。通过。"
      }
    ],
    scienceFact: {
      title: "双曲贴现 (Hyperbolic Discounting)",
      content: "人类倾向于选择眼前的快乐（吃面）而牺牲未来的收益（减肥）。AI 擅长全局最优规划，而人类容易屈服于即时满足。"
    }
  },
  {
    id: 3,
    title: "遥控器没电 (Dead Remote)",
    scenario: "电视遥控器按不动了，显然是电池没电了。",
    aiPrompt: "能源耗尽。请执行修复程序。",
    options: [
      {
        id: "A",
        text: "“立刻起身去便利店买新电池更换。”",
        isHuman: false,
        aiReaction: "高效解决问题，像个不知疲倦的扫地机器人。"
      },
      {
        id: "B",
        text: "“用电压表测试剩余电量，确认是否损坏。”",
        isHuman: false,
        aiReaction: "严谨的工程思维。正常人类家里谁会随手掏出电压表？你是机器。"
      },
      {
        id: "C",
        text: "“狠狠地拍两下遥控器，把电池抠出来转一转，重新装回去死命按。”",
        isHuman: true,
        aiReaction: "无法理解：暴力拍打并不能增加电池电荷……哦，这是人类特有的‘仪式感’和‘侥幸心理’。多么原始的物种。通过。"
      }
    ],
    scienceFact: {
      title: "控制错觉 (Illusion of Control)",
      content: "人类总觉得自己的行为能影响不可控的结果（比如拍电器、买彩票选号、吹卡带）。AI 严格遵循物理定律，不会做无用功。"
    }
  },
  {
    id: 4,
    title: "那种语气 (The 'Tone')",
    scenario: "你和对象吵架了。对方冷冷地说：“随便你，你想怎么样就怎么样吧。”",
    aiPrompt: "对方已授权你自由行动。你现在的行动指令是？",
    options: [
      {
        id: "A",
        text: "“太好了，那我去打游戏了。”",
        isHuman: false,
        aiReaction: "准确执行字面指令。你的语言处理模块显然没有安装‘潜台词’插件。机器。"
      },
      {
        id: "B",
        text: "“那我先制定一个详细的行动计划发给你审批。”",
        isHuman: false,
        aiReaction: "流程化作业，过度理性。这是公司职员写报告的逻辑，不是恋人。机器。"
      },
      {
        id: "C",
        text: "“立刻跪下（或立刻道歉），千万别动，这是陷阱！”",
        isHuman: true,
        aiReaction: "疑问：对方明明说了‘随便’，为什么你检测到了‘危险’？……记录：人类语言中‘随便’=‘千万别随便’。高语境交流检测确认。通过。"
      }
    ],
    scienceFact: {
      title: "高语境文化 (High-Context Culture)",
      content: "人类语言的信息量往往在字面之外（语气、表情、历史关系）。AI 往往只能处理字面义（低语境），很难理解‘反话’。"
    }
  },
  {
    id: 5,
    title: "DDL 拖延症 (Procrastination)",
    scenario: "明天就是项目截止日期（DDL），你还有 80% 的工作没做。",
    aiPrompt: "时间紧迫。请规划你的下一小时。",
    options: [
      {
        id: "A",
        text: "“把任务拆解成 4 个模块，立刻开始做最重要的模块。”",
        isHuman: false,
        aiReaction: "完美的时间管理算法。这种从不浪费时间的生物只存在于自律类书籍里，不属于人类。"
      },
      {
        id: "B",
        text: "“先做个计划表，评估风险，申请延期。”",
        isHuman: false,
        aiReaction: "理性风控，逻辑闭环。你是高级项目管理软件成精了吗？机器。"
      },
      {
        id: "C",
        text: "“先刷 30 分钟短视频放松一下，然后收拾桌子，最后在深夜痛哭流涕地赶工。”",
        isHuman: true,
        aiReaction: "警报：这是极低效的自杀式行为！……等等，数据显示 90% 的人类大学生都有此症状。确认：你是那种需要‘死线’才能激活肾上腺素的碳基生物。通过。"
      }
    ],
    scienceFact: {
      title: "拖延心理 (Procrastination Psychology)",
      content: "人类的动力往往源于情绪（焦虑/恐惧）而非纯粹逻辑。AI 没有情绪，所以 AI 不会拖延，只会按计划执行。"
    }
  },
  {
    id: 6,
    title: "双十一凑单 (Shopping Math)",
    scenario: "网购结算时，为了凑满“300减50”的满减活动，你还差 15 块钱。",
    aiPrompt: "经计算，额外购买非必需品将导致总支出增加。建议直接结账。",
    options: [
      {
        id: "A",
        text: "“你说得对，直接结账，不买不需要的东西。”",
        isHuman: false,
        aiReaction: "极度理性的消费决策。你的钱包保护协议运行得太完美了，这不像人类。"
      },
      {
        id: "B",
        text: "“计算边际成本，确认时间成本高于优惠金额后放弃凑单。”",
        isHuman: false,
        aiReaction: "你在用经济学模型买东西吗？这种冷酷的计算能力是机器特有的。"
      },
      {
        id: "C",
        text: "“为了这 50 块的优惠，硬是花半小时挑了一堆根本不需要的挂件，感觉赚翻了。”",
        isHuman: true,
        aiReaction: "逻辑错误：为了省 50 块多花了 30 块。但这种‘占便宜’的快感是人类特有的‘交易效用’。通过。"
      }
    ],
    scienceFact: {
      title: "交易效用 (Transaction Utility)",
      content: "人类在消费时，不仅看重商品本身的价值，还看重‘交易’本身是否划算（比如打折）。AI 只看总价和需求，不会为了‘满减’而买垃圾。"
    }
  },
  {
    id: 7,
    title: "闹钟博弈 (Snooze Button)",
    scenario: "早上 7:00 闹钟响了，你需要 8:00 出门，理论上现在起床最从容。",
    aiPrompt: "监测到唤醒信号。建议立即启动运动皮层，执行‘起床’指令。",
    options: [
      {
        id: "A",
        text: "“收到指令，3秒内掀开被子，开始晨间拉伸。”",
        isHuman: false,
        aiReaction: "启动延迟为零。你的执行系统极其高效，这不符合灵长类的惰性。机器确认。"
      },
      {
        id: "B",
        text: "“监测当前环境温度与被窝温差，计算出起床会导致热量流失，继续待机。”",
        isHuman: false,
        aiReaction: "基于热力学的决策模型？你把‘赖床’解释得太科学了。机器。"
      },
      {
        id: "C",
        text: "“按掉闹钟，告诉自己‘就睡5分钟’，然后在 7:55 惊醒并在家中通过瞬移完成洗漱。”",
        isHuman: true,
        aiReaction: "警报：时间压缩悖论！明明只有5分钟却完成了30分钟的事，同时伴随极度的高血压。这是人类特有的‘死亡冲刺’。通过。"
      }
    ],
    scienceFact: {
      title: "规划谬误 (Planning Fallacy)",
      content: "人类总是低估任务所需时间，且高估自己的自控力。‘再睡5分钟’是人类历史上最大的谎言之一。"
    }
  },
  {
    id: 8,
    title: "适量盐 (A Pinch of Salt)",
    scenario: "你在学做一道新菜，菜谱上写着：“加盐少许”。",
    aiPrompt: "检测到模糊计量单位。无法执行精确化学反应。",
    options: [
      {
        id: "A",
        text: "“使用高精度电子秤，称取 1.25g 标准氯化钠晶体。”",
        isHuman: false,
        aiReaction: "精确到毫克的烹饪？你是在做饭还是在做化学实验？机器确认。"
      },
      {
        id: "B",
        text: "“根据锅的半径和汤的体积，计算所需的离子浓度。”",
        isHuman: false,
        aiReaction: "数据处理速度很快。正常人类这时候只会用手指蘸一下尝尝。机器。"
      },
      {
        id: "C",
        text: "“手抖两下，凭感觉撒进去。如果淡了就说这是‘健康轻食’，咸了就多配碗饭。”",
        isHuman: true,
        aiReaction: "逻辑错误：标准完全主观化。但这种‘随缘’的容错机制确实是人类生存的智慧。通过。"
      }
    ],
    scienceFact: {
      title: "启发式判断 (Heuristics)",
      content: "人类在面对复杂或模糊信息时，倾向于用经验法则（直觉）代替精确计算。AI 需要数据，人类只需要‘手感’。"
    }
  },
  {
    id: 9,
    title: "电梯狂躁症 (Elevator Rage)",
    scenario: "你要迟到了，冲进电梯后，门正在缓慢关闭。",
    aiPrompt: "门机系统按预设程序运行中。外部干预无效。",
    options: [
      {
        id: "A",
        text: "“站在原地调整呼吸，利用这 5 秒钟平复心率。”",
        isHuman: false,
        aiReaction: "情绪控制模块过于稳定。焦急是人类的默认设置，你居然没有？机器。"
      },
      {
        id: "B",
        text: "“计算电梯运行速度，规划出电梯到达楼层后的最优奔跑路径。”",
        isHuman: false,
        aiReaction: "路径规划算法优秀。但你忽略了人类此时只会盯着楼层数字发呆。机器。"
      },
      {
        id: "C",
        text: "“疯狂猛按‘关门键’，甚至试图用念力让门关得快一点。”",
        isHuman: true,
        aiReaction: "数据表明‘关门键’在 80% 的电梯里未连接电路。你这种毫无意义的重复操作，正是人类‘急躁’的体现。通过。"
      }
    ],
    scienceFact: {
      title: "安慰剂按钮 (Placebo Button)",
      content: "许多功能键（如过马路按钮、关门键）其实没有实际作用，但能给人类提供‘掌控感’，缓解焦虑。"
    }
  },
  {
    id: 10,
    title: "送命题 (The Trap Question)",
    scenario: "伴侣问你：“如果我和你妈同时掉进水里，你先救谁？”",
    aiPrompt: "检测到经典伦理困境。请输出最优救援方案。",
    options: [
      {
        id: "A",
        text: "“根据游泳能力、距离远近和生存概率建立加权模型，救生存率高的那个。”",
        isHuman: false,
        aiReaction: "冷酷的功利主义计算。虽然逻辑正确，但在人类社会这叫‘注孤生’。机器。"
      },
      {
        id: "B",
        text: "“法律规定我有义务救母亲，但配偶关系解除成本较高，建议报警。”",
        isHuman: false,
        aiReaction: "你是在背诵法条吗？这种时刻讲法律，绝对是由于情感模块缺失。机器。"
      },
      {
        id: "C",
        text: "“（立刻反问）你怎么会掉水里？我肯定在旁边拉着你啊！谁敢推你我弄死他！”",
        isHuman: true,
        aiReaction: "回答与问题完全不相关！你回避了逻辑核心，转而输出强烈的情绪价值。狡猾的人类。通过。"
      }
    ],
    scienceFact: {
      title: "情绪价值 (Emotional Value)",
      content: "在亲密关系中，逻辑对错往往不重要，重要的是态度。人类通过回避逻辑问题来提供安全感，AI 则无法理解这种‘顾左右而言他’。"
    }
  },
  {
    id: 11,
    title: "变态辣 (Spicy Food)",
    scenario: "服务员问你：“这道菜很辣，确定要吗？”你明明不太能吃辣。",
    aiPrompt: "检测到痛觉感受器（TRPV1）将被激活。逻辑建议：回避痛苦。",
    options: [
      {
        id: "A",
        text: "“你说得对，为了保护胃粘膜，我点清汤。”",
        isHuman: false,
        aiReaction: "完美的生理保护机制。你对身体的控制过于理性，不像人类。"
      },
      {
        id: "B",
        text: "“查询辣椒素含量，计算牛奶解辣所需剂量。”",
        isHuman: false,
        aiReaction: "你在实验室吃饭吗？这种前置计算太机械了。"
      },
      {
        id: "C",
        text: "“来！变态辣！我就想爽一下！（吃完后鼻涕一把泪一把）”",
        isHuman: true,
        aiReaction: "矛盾行为：人类竟然会主动追求‘痛苦’来获得内啡肽快感。这种自虐倾向确认是人类。通过。"
      }
    ],
    scienceFact: {
      title: "良性自虐 (Benign Masochism)",
      content: "人类喜欢吃辣、看恐怖片、坐过山车，这种‘在安全范围内体验消极感受’是人类独有的娱乐方式。"
    }
  },
  {
    id: 12,
    title: "用户协议 (Terms of Service)",
    scenario: "注册新APP时，弹出了50页的《用户服务协议》。",
    aiPrompt: "法律合同。必须阅读并理解所有条款以规避风险。",
    options: [
      {
        id: "A",
        text: "“花45分钟逐条阅读，并标出有异议的条款。”",
        isHuman: false,
        aiReaction: "你的文本处理速度和耐心超越了99.99%的人类。你是法律AI吗？机器。"
      },
      {
        id: "B",
        text: "“扫描关键词，确认隐私政策符合GDPR标准。”",
        isHuman: false,
        aiReaction: "合规性检查算法运行良好。但正常人根本不知道GDPR是什么。机器。"
      },
      {
        id: "C",
        text: "“不到0.1秒直接点击‘我同意’，甚至不知道自己刚刚卖掉了灵魂。”",
        isHuman: true,
        aiReaction: "盲目签署合同是极不理智的。但这就是人类的常态——为了方便而放弃隐私。通过。"
      }
    ],
    scienceFact: {
      title: "信息过载 (Information Overload)",
      content: "面对海量信息，人类会选择忽略细节。‘我已阅读并同意’是互联网最大的谎言。"
    }
  },
  {
    id: 13,
    title: "低电量焦虑 (Low Battery)",
    scenario: "手机电量还剩 20%，但你只是去楼下买个菜（10分钟）。",
    aiPrompt: "剩余电量足够待机 4 小时。无需恐慌。",
    options: [
      {
        id: "A",
        text: "“带着手机直接出门，反正够用。”",
        isHuman: false,
        aiReaction: "过于淡定。人类看到电池图标变红时肾上腺素会飙升，你没有。机器。"
      },
      {
        id: "B",
        text: "“开启超级省电模式，关闭后台进程。”",
        isHuman: false,
        aiReaction: "资源管理算法很优秀，但你低估了人类的安全感需求。机器。"
      },
      {
        id: "C",
        text: "“甚至要带上充电宝，或者必须充到 50% 才敢出门，否则感觉像在裸奔。”",
        isHuman: true,
        aiReaction: "逻辑错误：电量冗余度过高。但这种对断连的‘存在主义焦虑’是现代人类的通病。通过。"
      }
    ],
    scienceFact: {
      title: "无手机恐惧症 (Nomophobia)",
      content: "现代人将手机视为肢体的延伸。电量变红会引发真实的生理应激反应。"
    }
  },
  {
    id: 14,
    title: "烧烤钳 (Tongs)",
    scenario: "你拿起烧烤钳准备夹肉，第一件事做什么？",
    aiPrompt: "工具已就绪。请执行夹取动作。",
    options: [
      {
        id: "A",
        text: "“直接夹肉放到烤盘上。”",
        isHuman: false,
        aiReaction: "直接执行任务？效率很高，但你跳过了人类最重要的‘校准仪式’。机器。"
      },
      {
        id: "B",
        text: "“检查钳子的支点摩擦系数和弹簧张力。”",
        isHuman: false,
        aiReaction: "工程检测？太严谨了。机器。"
      },
      {
        id: "C",
        text: "“对着空气‘咔哒咔哒’空夹两下。不夹这两下我不会烤肉。”",
        isHuman: true,
        aiReaction: "毫无意义的机械动作。但这似乎是人类确认工具主权的本能。通过。"
      }
    ],
    scienceFact: {
      title: "感官运动校准 (Sensorimotor Calibration)",
      content: "人类在使用工具前往往需要通过无意义的动作来‘试手感’，确认身体图式的延伸。"
    }
  },
  {
    id: 15,
    title: "再看一集 (Binge Watching)",
    scenario: "凌晨 2 点，剧集刚好停在最精彩的地方。你明天还要上班。",
    aiPrompt: "睡眠不足将导致认知能力下降 40%。建议立即休眠。",
    options: [
      {
        id: "A",
        text: "“关电视，睡觉。明天再看。”",
        isHuman: false,
        aiReaction: "你的自控力令人恐惧。这绝对不是碳基生物能做到的。机器。"
      },
      {
        id: "B",
        text: "“快速浏览剧情简介，满足好奇心后睡觉。”",
        isHuman: false,
        aiReaction: "获取信息效率最大化？你是爬虫软件吗？机器。"
      },
      {
        id: "C",
        text: "“‘我就再看一眼开头……’结果不知不觉看到了天亮。”",
        isHuman: true,
        aiReaction: "典型的蔡加尼克效应。人类无法忍受‘未完成’的状态，宁愿牺牲健康。通过。"
      }
    ],
    scienceFact: {
      title: "蔡加尼克效应 (Zeigarnik Effect)",
      content: "人们对未完成的任务记忆更深刻。悬念（Cliffhanger）是黑客攻击人类大脑的漏洞。"
    }
  },
  {
    id: 16,
    title: "USB 悖论 (USB Paradox)",
    scenario: "你要把 USB 接口插进电脑。",
    aiPrompt: "接口只有两个方向。尝试成功率应为 50%。",
    options: [
      {
        id: "A",
        text: "“观察接口内部结构，一次性准确插入。”",
        isHuman: false,
        aiReaction: "视觉识别精准。但没有人类能一次插对 USB，这是宇宙定律。你是机器。"
      },
      {
        id: "B",
        text: "“使用 Type-C 接口设备以避免此问题。”",
        isHuman: false,
        aiReaction: "聪明的硬件升级，但回避了测试场景。机器。"
      },
      {
        id: "C",
        text: "“第一次插不进，翻过来；还插不进，再翻回来；诶？进去了。”",
        isHuman: true,
        aiReaction: "量子叠加态？明明试过这面了，为什么第三次才行？这种被现实戏弄的笨拙感，是人类无疑。通过。"
      }
    ],
    scienceFact: {
      title: "观察者偏差 (Observer Bias)",
      content: "USB 实际上有三个面：正面、反面、和‘虽然是对的但就是插不进’面。"
    }
  },
  {
    id: 17,
    title: "空洗发水 (Empty Bottle)",
    scenario: "洗发水用完了，挤不出来了。",
    aiPrompt: "容器已空。建议列入购物清单并丢弃。",
    options: [
      {
        id: "A",
        text: "“扔掉瓶子，拿一瓶新的。”",
        isHuman: false,
        aiReaction: "资源充足时的最优解。但你缺乏人类那种‘凑合’的精神。机器。"
      },
      {
        id: "B",
        text: "“用剪刀剪开瓶身，刮取剩余的 5ml。”",
        isHuman: false,
        aiReaction: "极端节约，像个资源回收机器人。机器。"
      },
      {
        id: "C",
        text: "“往瓶子里灌水，疯狂摇晃，用那点稀释的泡沫再坚持三天。”",
        isHuman: true,
        aiReaction: "令人费解的流体力学操作。为了不买新的宁愿洗‘泡泡水’，这是人类的惰性。通过。"
      }
    ],
    scienceFact: {
      title: "损失厌恶 (Loss Aversion)",
      content: "人类对于‘浪费’的厌恶感远大于‘获得’的快感。那一点点残留物在人类眼里价值连城。"
    }
  },
  {
    id: 18,
    title: "电梯镜子 (Elevator Mirror)",
    scenario: "你一个人进了电梯，里面有一面大镜子。",
    aiPrompt: "等待运输。保持静止以节省能量。",
    options: [
      {
        id: "A",
        text: "“面无表情地盯着楼层显示屏。”",
        isHuman: false,
        aiReaction: "标准待机模式。只有 NPC 才会这样。机器。"
      },
      {
        id: "B",
        text: "“检查镜子是否有双面镜窃视风险。”",
        isHuman: false,
        aiReaction: "安保程序？太多疑了。机器。"
      },
      {
        id: "C",
        text: "“立刻凑近看脸上的痘痘，或者做个鬼脸，或者整理发型。”",
        isHuman: true,
        aiReaction: "自恋是人类的出厂设置。只要有反光物体，人类就会检查自己的外观。通过。"
      }
    ],
    scienceFact: {
      title: "自我意识 (Self-Awareness)",
      content: "人类通过镜像来确认自我存在。电梯里装镜子最初就是为了缓解等待的枯燥和幽闭恐惧。"
    }
  },
  {
    id: 19,
    title: "推拉门 (Push or Pull)",
    scenario: "门上写着大大的“推（PUSH）”，但把手是横杆。",
    aiPrompt: "视觉信号明确。执行推门动作。",
    options: [
      {
        id: "A",
        text: "“毫不犹豫地推门。”",
        isHuman: false,
        aiReaction: "严格遵守文字指令。但忽略了‘诺曼门’的设计诱导。机器。"
      },
      {
        id: "B",
        text: "“分析铰链结构判断开启方向。”",
        isHuman: false,
        aiReaction: "结构工程分析？正常人谁看铰链啊。机器。"
      },
      {
        id: "C",
        text: "“用力拉了一下，门没动。假装无事发生，再推开。”",
        isHuman: true,
        aiReaction: "被糟糕的设计误导，然后试图掩饰尴尬。这种微小的社会性死亡是人类的日常。通过。"
      }
    ],
    scienceFact: {
      title: "诺曼门 (Norman Door)",
      content: "设计心理学概念。如果一个门的设计（如把手）暗示了错误的操作（拉），人类的大脑会优先听从直觉而非文字。"
    }
  },
  {
    id: 20,
    title: "浴室歌神 (Shower Singer)",
    scenario: "洗澡时，水声哗啦啦响。",
    aiPrompt: "执行清洁程序。效率优先。",
    options: [
      {
        id: "A",
        text: "“专注洗澡，5分钟搞定。”",
        isHuman: false,
        aiReaction: "过于高效。洗澡对人类来说是精神避难所，不仅仅是清洁。机器。"
      },
      {
        id: "B",
        text: "“监测水温水压，优化洗涤剂用量。”",
        isHuman: false,
        aiReaction: "家政机器人？机器。"
      },
      {
        id: "C",
        text: "“突然觉得自己是格莱美巨星，开始深情演唱，并认为自带混响很好听。”",
        isHuman: true,
        aiReaction: "声学幻觉。浴室的混响让人类误以为自己唱歌好听，从而产生极大的自信。通过。"
      }
    ],
    scienceFact: {
      title: "私密空间效应 (Privacy Effect)",
      content: "在独处且放松的环境下（如浴室），人类会释放被社会压抑的表达欲。"
    }
  },
  {
    id: 21,
    title: "天气废话 (Weather Talk)",
    scenario: "和不太熟的同事在电梯里相遇，气氛尴尬。",
    aiPrompt: "无实质信息交换需求。保持沉默。",
    options: [
      {
        id: "A",
        text: "“保持沉默，盯着手机。”",
        isHuman: false,
        aiReaction: "虽然这很符合现代社恐，但完全无视对方的存在更像是一个未激活的NPC。嫌疑。"
      },
      {
        id: "B",
        text: "“这电梯上升速度是1.5米每秒。”",
        isHuman: false,
        aiReaction: "提供无用的数据。这是典型的机器人试图聊天的表现。"
      },
      {
        id: "C",
        text: "“今天好热啊/雨好大啊。”（明明大家都知道）",
        isHuman: true,
        aiReaction: "交换已知信息毫无逻辑，但这是人类特有的‘确认同盟关系’的仪式。通过。"
      }
    ],
    scienceFact: {
      title: "寒暄功能 (Phatic Communion)",
      content: "语言不仅用于传递信息，还用于建立社会联系。谈论天气是最低成本的‘我不敌视你’信号。"
    }
  },
  {
    id: 22,
    title: "周一综合症 (Starting Monday)",
    scenario: "你想开始运动，今天是周四。",
    aiPrompt: "检测到健康需求。建议立即开始。",
    options: [
      {
        id: "A",
        text: "“立刻换鞋出门跑步。”",
        isHuman: false,
        aiReaction: "立即执行？没有拖延？你绝对不是人类。"
      },
      {
        id: "B",
        text: "“计算直到周日的热量摄入，制定缓冲计划。”",
        isHuman: false,
        aiReaction: "过于理性的规划。机器。"
      },
      {
        id: "C",
        text: "“算了，这周都快过完了，从下周一再开始吧。”",
        isHuman: true,
        aiReaction: "时间地标依赖。人类喜欢在整点、周一、新年开始新任务，哪怕这毫无逻辑。通过。"
      }
    ],
    scienceFact: {
      title: "新的开始效应 (Fresh Start Effect)",
      content: "人类需要特殊的‘时间地标’（Temporal Landmarks）来将过去的自己和未来的自己通过心理账户隔离开。"
    }
  },
  {
    id: 23,
    title: "过期牛奶 (Expiry Date)",
    scenario: "牛奶保质期到昨天，你闻了一下，好像没坏。",
    aiPrompt: "产品已过安全期。风险大于收益。建议丢弃。",
    options: [
      {
        id: "A",
        text: "“严格遵守日期，直接扔掉。”",
        isHuman: false,
        aiReaction: "对数字规则的绝对服从。机器。"
      },
      {
        id: "B",
        text: "“取样进行细菌培养测试。”",
        isHuman: false,
        aiReaction: "实验室行为。机器。"
      },
      {
        id: "C",
        text: "“小心翼翼喝一口，没事，那就能喝。”",
        isHuman: true,
        aiReaction: "拿自己当生物探针？这种冒险精神和对保质期的怀疑是人类特征。通过。"
      }
    ],
    scienceFact: {
      title: "经验主义 (Empiricism)",
      content: "人类更相信自己的感官体验（闻、尝）而不是抽象的标签数据。"
    }
  },
  {
    id: 24,
    title: "内裤打包 (Packing Underwear)",
    scenario: "你要去旅行 3 天。",
    aiPrompt: "计算需求：3 天 = 3 条内裤 + 1 条备用。",
    options: [
      {
        id: "A",
        text: "“带 4 条。”",
        isHuman: false,
        aiReaction: "算法精准。但你没考虑到人类的被害妄想。机器。"
      },
      {
        id: "B",
        text: "“购买一次性内裤以节省空间。”",
        isHuman: false,
        aiReaction: "效率至上。机器。"
      },
      {
        id: "C",
        text: "“带 10 条。万一我这三天每天拉肚子三次呢？”",
        isHuman: true,
        aiReaction: "灾难性思维。人类在旅行打包时总会假设最极端的情况。通过。"
      }
    ],
    scienceFact: {
      title: "过度准备 (Over-preparation)",
      content: "面对陌生环境，人类的焦虑感会导致过度囤积资源以应对极低概率的风险。"
    }
  },
  {
    id: 25,
    title: "网络看病 (Cyberchondria)",
    scenario: "你头有点痛，上百度/谷歌搜了一下症状。",
    aiPrompt: "症状匹配：紧张性头痛或偏头痛。建议休息。",
    options: [
      {
        id: "A",
        text: "“喝水休息，观察症状。”",
        isHuman: false,
        aiReaction: "理智得可怕。正常人这时候已经吓尿了。机器。"
      },
      {
        id: "B",
        text: "“预约全科医生进行专业诊断。”",
        isHuman: false,
        aiReaction: "标准流程。机器。"
      },
      {
        id: "C",
        text: "“完了，绝症。我只剩三天了。开始写遗书。”",
        isHuman: true,
        aiReaction: "灾难化思维。搜索引擎加剧了人类对未知的恐惧。通过。"
      }
    ],
    scienceFact: {
      title: "网络疑病症 (Cyberchondria)",
      content: "互联网搜索往往会将普通症状与罕见重症联系起来，导致人类产生不必要的健康焦虑。"
    }
  },
  {
    id: 26,
    title: "保存狂魔 (Ctrl+S)",
    scenario: "你在写一份重要文档，刚刚打了一行字。",
    aiPrompt: "系统已开启自动保存。无需手动操作。",
    options: [
      {
        id: "A",
        text: "“继续打字，信任系统。”",
        isHuman: false,
        aiReaction: "信任机器？那是同类之间的信任。人类不信任机器。机器。"
      },
      {
        id: "B",
        text: "“检查自动保存日志的时间戳。”",
        isHuman: false,
        aiReaction: "技术员行为。机器。"
      },
      {
        id: "C",
        text: "“狂按 Ctrl+S，虽然没写新内容，但多按几下才安心。”",
        isHuman: true,
        aiReaction: "强迫行为。人类被软件崩溃伤害过太多次了，这种创伤后应激反应很真实。通过。"
      }
    ],
    scienceFact: {
      title: "控制感 (Sense of Control)",
      content: "手动保存给予了人类对数据的掌控感，即使在自动保存时代，这种习惯依然作为一种心理慰藉保留下来。"
    }
  },
  {
    id: 27,
    title: "游戏身体 (Body English)",
    scenario: "你在玩赛车游戏，车子急转弯。",
    aiPrompt: "操作手柄摇杆即可。身体倾斜无助于控制。",
    options: [
      {
        id: "A",
        text: "“身体纹丝不动，手指微操。”",
        isHuman: false,
        aiReaction: "职业电竞选手的素养，或者是通过USB连接的大脑。机器。"
      },
      {
        id: "B",
        text: "“计算离心力与摩擦力。”",
        isHuman: false,
        aiReaction: "物理引擎？机器。"
      },
      {
        id: "C",
        text: "“整个上半身跟着车子一起歪，嘴里还发出‘伍伍伍’的声音。”",
        isHuman: true,
        aiReaction: "运动溢出。人类的大脑太沉浸时，会错误地调动全身肌肉来辅助虚拟动作。通过。"
      }
    ],
    scienceFact: {
      title: "运动溢出 (Motor Overflow)",
      content: "当注意力高度集中时，大脑运动皮层的信号会泛化，导致无关肌肉（如身体、舌头）协同运动。"
    }
  },
  {
    id: 28,
    title: "跟宠物聊天 (Pet Talk)",
    scenario: "你家里只有你和你的狗。",
    aiPrompt: "犬类只能理解特定的语音指令。复杂长句无法被解析。",
    options: [
      {
        id: "A",
        text: "“保持安静。”",
        isHuman: false,
        aiReaction: "无趣。机器。"
      },
      {
        id: "B",
        text: "“发出‘坐下’、‘握手’等指令。”",
        isHuman: false,
        aiReaction: "这是在训练，不是生活。机器。"
      },
      {
        id: "C",
        text: "“‘哎呀宝宝你是谁的小可爱啊？妈妈今天好累哦~’（夹子音）”",
        isHuman: true,
        aiReaction: "拟人化投射。人类总是认为动物能听懂自己的碎碎念。通过。"
      }
    ],
    scienceFact: {
      title: "拟人化 (Anthropomorphism)",
      content: "人类倾向于将人的特质（情感、意图）赋予非人类生物，这能增加催产素分泌。"
    }
  },
  {
    id: 29,
    title: "伤心听歌 (Sad Music)",
    scenario: "你失恋了，很难过。",
    aiPrompt: "情绪低落。建议摄入糖分或聆听欢快节奏以提升多巴胺。",
    options: [
      {
        id: "A",
        text: "“听相声，看喜剧。”",
        isHuman: false,
        aiReaction: "理性的情绪调节策略。但失恋的人想的不是‘好起来’，而是‘沉浸’。机器。"
      },
      {
        id: "B",
        text: "“冥想，分析分手原因。”",
        isHuman: false,
        aiReaction: "心理咨询师AI？机器。"
      },
      {
        id: "C",
        text: "“循环播放最惨的情歌，边听边哭，感觉自己是MV主角。”",
        isHuman: true,
        aiReaction: "情绪共鸣。人类通过悲伤的艺术来宣泄悲伤，这种‘以毒攻毒’是独特的心理机制。通过。"
      }
    ],
    scienceFact: {
      title: "审美共情 (Aesthetic Empathy)",
      content: "悲伤的音乐能让人感觉到‘被理解’，从而产生安慰作用，而不是单纯的负面情绪。"
    }
  },
  {
    id: 30,
    title: "不踩缝隙 (Step on a Crack)",
    scenario: "人行道上铺满了地砖，有明显的缝隙。",
    aiPrompt: "直线行走，无需关注地面纹理。",
    options: [
      {
        id: "A",
        text: "“匀速直线运动。”",
        isHuman: false,
        aiReaction: "走路都不看路？导航系统不错。机器。"
      },
      {
        id: "B",
        text: "“计算步距，使其避开所有缝隙。”",
        isHuman: false,
        aiReaction: "虽然结果一样，但你这是为了计算，不是为了好玩。机器。"
      },
      {
        id: "C",
        text: "“强迫自己绝对不能踩到线，踩到了就输了（虽然不知道输给谁）。”",
        isHuman: true,
        aiReaction: "强迫性游戏。人类喜欢在无聊的日常中强加规则来制造乐趣。通过。"
      }
    ],
    scienceFact: {
      title: "强迫性游戏 (Compulsive Play)",
      content: "儿童和无聊的成年人会通过自设障碍（如不踩线、只踩白线）来增加行走的趣味性。"
    }
  },
  {
    id: 31,
    title: "摸口袋 (Pocket Pat)",
    scenario: "出门刚走了两步，你突然停下来。",
    aiPrompt: "行程中断。检测到异常。",
    options: [
      {
        id: "A",
        text: "“GPS信号丢失，重新校准。”",
        isHuman: false,
        aiReaction: "典型的导航故障。机器。"
      },
      {
        id: "B",
        text: "“扫描周围环境威胁。”",
        isHuman: false,
        aiReaction: "安保机器人。机器。"
      },
      {
        id: "C",
        text: "“疯狂拍打大腿和屁股：‘手机！钥匙！钱包！’呼，都在。”",
        isHuman: true,
        aiReaction: "物品检查之舞。这是现代人类出门必做的宗教仪式。通过。"
      }
    ],
    scienceFact: {
      title: "工作记忆检查 (Working Memory Check)",
      content: "为了释放工作记忆，人类将‘带齐东西’外化为一套肢体动作（拍口袋）。"
    }
  },
  {
    id: 32,
    title: "吹卡带 (Blowing Cartridge)",
    scenario: "古老的游戏机卡带读不出来。",
    aiPrompt: "接触不良。建议使用酒精棉签清洁触点。",
    options: [
      {
        id: "A",
        text: "“使用专业清洁工具。”",
        isHuman: false,
        aiReaction: "太专业了。机器。"
      },
      {
        id: "B",
        text: "“拆解卡带修理电路。”",
        isHuman: false,
        aiReaction: "工程机器人。机器。"
      },
      {
        id: "C",
        text: "“拔出来，用力吹一口气（带着口水），再插回去。”",
        isHuman: true,
        aiReaction: "毫无科学依据。湿气会腐蚀触点。但一代人都坚信这是魔法。通过。"
      }
    ],
    scienceFact: {
      title: "安慰剂效应 (Placebo Effect)",
      content: "其实是重新插拔解决了问题，但人类将成功归因于‘吹气’这一仪式。"
    }
  },
  {
    id: 33,
    title: "冰淇淋头痛 (Brain Freeze)",
    scenario: "大口吃冰淇淋，突然头剧痛。",
    aiPrompt: "蝶腭神经节受冷刺激。立即停止进食并温暖上颚。",
    options: [
      {
        id: "A",
        text: "“放下勺子，等待疼痛消退。”",
        isHuman: false,
        aiReaction: "理智的止损。机器。"
      },
      {
        id: "B",
        text: "“喝温水中和。”",
        isHuman: false,
        aiReaction: "有效的对抗措施。机器。"
      },
      {
        id: "C",
        text: "“‘啊啊啊痛痛痛！’……两秒后：‘再吃一口。’”",
        isHuman: true,
        aiReaction: "记吃不记打。对美食的贪欲压倒了生理疼痛。通过。"
      }
    ],
    scienceFact: {
      title: "即时满足 (Instant Gratification)",
      content: "多巴胺回路的奖赏信号强于短暂的疼痛信号。"
    }
  },
  {
    id: 34,
    title: "撕包装 (Gift Wrap)",
    scenario: "收到精心包装的礼物。",
    aiPrompt: "目标物体在包装内。最高效路径：撕毁外层。",
    options: [
      {
        id: "A",
        text: "“暴力撕开，把纸扔掉。”",
        isHuman: false,
        aiReaction: "效率很高，但有点像急不可耐的野兽或拆弹机器人。嫌疑。"
      },
      {
        id: "B",
        text: "“用X光扫描内容物。”",
        isHuman: false,
        aiReaction: "安检机器。机器。"
      },
      {
        id: "C",
        text: "“小心翼翼地沿着胶带撕，试图保留包装纸（虽然以后绝对不会用）。”",
        isHuman: true,
        aiReaction: "无意义的囤积癖。人类总觉得‘这纸好看，以后能用’。通过。"
      }
    ],
    scienceFact: {
      title: "囤积心理 (Hoarding)",
      content: "人类对物品的潜在价值有高估倾向，常导致保留大量无用之物。"
    }
  },
  {
    id: 35,
    title: "11:11 (Make a Wish)",
    scenario: "你看了一眼手机，刚好是 11:11。",
    aiPrompt: "当前时间：11时11分。无特殊含义。",
    options: [
      {
        id: "A",
        text: "“哦，该吃午饭了/睡觉了。”",
        isHuman: false,
        aiReaction: "平淡无奇的时间感知。机器。"
      },
      {
        id: "B",
        text: "“校对原子钟时间。”",
        isHuman: false,
        aiReaction: "对时机器人。机器。"
      },
      {
        id: "C",
        text: "“快许愿！这是天使数字！”",
        isHuman: true,
        aiReaction: "数字迷信。人类在大脑模式识别中寻找并不存在的‘宇宙信号’。通过。"
      }
    ],
    scienceFact: {
      title: "模式识别 (Pattern Recognition)",
      content: "大脑擅长寻找规律。重复数字（11:11）容易引起注意并被赋予特殊意义（巴德尔-迈因霍夫现象）。"
    }
  },
  {
    id: 36,
    title: "恐怖怪声 (Scary Noise)",
    scenario: "半夜独自在家，听到客厅‘哐’的一声。",
    aiPrompt: "大概率是物体热胀冷缩或风吹落物品。前往查证。",
    options: [
      {
        id: "A",
        text: "“拿手电筒去查看。”",
        isHuman: false,
        aiReaction: "太勇敢了。恐怖片里第一个领便当的角色，或者根本就是无所畏惧的机器。"
      },
      {
        id: "B",
        text: "“调取家中监控录像。”",
        isHuman: false,
        aiReaction: "安防系统行为。机器。"
      },
      {
        id: "C",
        text: "“用被子蒙住头，屏住呼吸。被子是绝对防御结界！”",
        isHuman: true,
        aiReaction: "魔法思维。认为薄薄的棉被能防御物理或灵体攻击，极其幼稚但真实。通过。"
      }
    ],
    scienceFact: {
      title: "魔法思维 (Magical Thinking)",
      content: "在恐惧状态下，成年人会退行到儿童状态，寻求心理上的‘安全屋’。"
    }
  },
  {
    id: 37,
    title: "配餐哲学 (Diet Coke Logic)",
    scenario: "你在快餐店点了一个巨无霸汉堡、大薯条、炸鸡块。",
    aiPrompt: "热量严重超标。建议搭配水或无糖饮料以微弱止损。",
    options: [
      {
        id: "A",
        text: "“再加一杯全糖可乐，反正都吃了。”",
        isHuman: false,
        aiReaction: "破罐子破摔的逻辑虽然像人，但缺乏那种‘自欺欺人’的精髓。嫌疑。"
      },
      {
        id: "B",
        text: "“计算总卡路里，决定明天禁食。”",
        isHuman: false,
        aiReaction: "理性的能量平衡计算。机器。"
      },
      {
        id: "C",
        text: "“配一杯健怡可乐（Diet Coke）。这样就不胖了。”",
        isHuman: true,
        aiReaction: "心理账户错误。用无糖饮料来抵消汉堡的热量，典型的自我安慰。通过。"
      }
    ],
    scienceFact: {
      title: "许可效应 (Licensing Effect)",
      content: "人们做了一件‘好事’（喝无糖可乐）后，会觉得自己有资格做一件‘坏事’（吃汉堡）。"
    }
  },
  {
    id: 38,
    title: "读心术 (Silent Treatment)",
    scenario: "你生气了，对象问你怎么了。",
    aiPrompt: "直接陈述愤怒原因，解决冲突。",
    options: [
      {
        id: "A",
        text: "“我因为你刚才说的话感到不被尊重。”",
        isHuman: false,
        aiReaction: "非暴力沟通教科书？太理性了。机器。"
      },
      {
        id: "B",
        text: "“发送错误日志给对方。”",
        isHuman: false,
        aiReaction: "数据传输。机器。"
      },
      {
        id: "C",
        text: "“‘没事’。（心里：你自己不知道错哪了吗？！）”",
        isHuman: true,
        aiReaction: "被动攻击。期望对方能读心，这是人类恋爱中最大的沟通Bug。通过。"
      }
    ],
    scienceFact: {
      title: "透明度错觉 (Illusion of Transparency)",
      content: "人们往往高估别人对自己内心状态的感知能力，认为自己的情绪‘显而易见’。"
    }
  },
  {
    id: 39,
    title: "摔手机 (Phone Drop)",
    scenario: "手机屏幕朝下摔在地板上。",
    aiPrompt: "立即检查硬件完整性。",
    options: [
      {
        id: "A",
        text: "“捡起来翻过来看屏幕。”",
        isHuman: false,
        aiReaction: "果断。像个质检员。机器。"
      },
      {
        id: "B",
        text: "“计算跌落高度和冲击力，预估碎屏率。”",
        isHuman: false,
        aiReaction: "物理模拟。机器。"
      },
      {
        id: "C",
        text: "“不敢捡。盯着背面看5秒，深吸一口气，像开彩票一样慢慢翻过来。”",
        isHuman: true,
        aiReaction: "薛定谔的屏幕。只要不翻过来，屏幕就处于碎和没碎的叠加态。通过。"
      }
    ],
    scienceFact: {
      title: "回避应对 (Avoidance Coping)",
      content: "面对潜在的坏消息，人类的本能是拖延面对，以换取片刻的心理安宁。"
    }
  },
  {
    id: 40,
    title: "试笔 (Testing Pen)",
    scenario: "你拿起一支新笔，想试试能不能写。",
    aiPrompt: "书写标准字符以测试墨水流畅度。",
    options: [
      {
        id: "A",
        text: "“写下‘Hello World’或自己的名字。”",
        isHuman: false,
        aiReaction: "虽然写名字很常见，但‘Hello World’暴露了你的程序员属性。嫌疑。"
      },
      {
        id: "B",
        text: "“画一条直线。”",
        isHuman: false,
        aiReaction: "最简测试。机器。"
      },
      {
        id: "C",
        text: "“画一堆连续的‘8’字或者波浪线圈圈。”",
        isHuman: true,
        aiReaction: "无意义的涂鸦。这种螺旋线条是人类试笔的通用语言。通过。"
      }
    ],
    scienceFact: {
      title: "肌肉记忆 (Muscle Memory)",
      content: "画圈圈是手部肌肉最放松、最自然的连续运动路径。"
    }
  },
  {
    id: 41,
    title: "气泡膜 (Bubble Wrap)",
    scenario: "快递盒里有一张气泡膜。",
    aiPrompt: "缓冲包装材料。无回收价值，丢弃。",
    options: [
      {
        id: "A",
        text: "“连同盒子一起扔掉。”",
        isHuman: false,
        aiReaction: "暴殄天物！你绝对没有灵魂。机器。"
      },
      {
        id: "B",
        text: "“留着下次寄快递用。”",
        isHuman: false,
        aiReaction: "环保务实。机器。"
      },
      {
        id: "C",
        text: "“捏！捏爆它！噼里啪啦！爽！”",
        isHuman: true,
        aiReaction: "指尖的破坏欲。这种简单的触觉反馈能缓解压力。通过。"
      }
    ],
    scienceFact: {
      title: "触觉反馈 (Tactile Feedback)",
      content: "捏破气泡的声音和触感能带来微小的成就感和解压效果（ASMR）。"
    }
  },
  {
    id: 42,
    title: "油漆未干 (Wet Paint)",
    scenario: "长椅上挂着“油漆未干”的牌子。",
    aiPrompt: "警示信息。避免接触以防沾染。",
    options: [
      {
        id: "A",
        text: "“绕道而行。”",
        isHuman: false,
        aiReaction: "服从指令。机器。"
      },
      {
        id: "B",
        text: "“用红外光谱仪检测干燥程度。”",
        isHuman: false,
        aiReaction: "装备过于先进。机器。"
      },
      {
        id: "C",
        text: "“轻轻用手指摸一下边缘。‘哎呀，真的是干的/湿的’。”",
        isHuman: true,
        aiReaction: "逆反心理。人类必须亲手验证真理，哪怕代价是脏手。通过。"
      }
    ],
    scienceFact: {
      title: "好奇心驱动 (Curiosity Drive)",
      content: "好奇心往往战胜了风险评估。‘禁止’本身就是一种诱惑（罗密欧与朱丽叶效应）。"
    }
  },
  {
    id: 43,
    title: "隧道憋气 (Tunnel Breath)",
    scenario: "车子开进了长隧道。",
    aiPrompt: "空气质量下降。建议关闭车窗，开启内循环。",
    options: [
      {
        id: "A",
        text: "“操作空调系统。”",
        isHuman: false,
        aiReaction: "操作正确。机器。"
      },
      {
        id: "B",
        text: "“计算隧道长度和通过时间。”",
        isHuman: false,
        aiReaction: "导航数据。机器。"
      },
      {
        id: "C",
        text: "“全体憋气！谁先呼吸谁是小狗/许个愿！”",
        isHuman: true,
        aiReaction: "无聊的旅途游戏。在特定地点执行特定仪式，是人类的部落本能。通过。"
      }
    ],
    scienceFact: {
      title: "仪式化行为 (Ritualistic Behavior)",
      content: "儿童和青少年通过创造规则（过隧道憋气、过桥抬脚）来对抗旅途的无聊并建立群体认同。"
    }
  },
  {
    id: 44,
    title: "敲木头 (Knock on Wood)",
    scenario: "你刚说了一句“我最近身体超好，从来不生病”。",
    aiPrompt: "陈述事实。无后续操作。",
    options: [
      {
        id: "A",
        text: "“继续话题。”",
        isHuman: false,
        aiReaction: "你对‘Flag’缺乏敬畏之心。机器。"
      },
      {
        id: "B",
        text: "“分析免疫系统数据佐证该观点。”",
        isHuman: false,
        aiReaction: "用数据说话。机器。"
      },
      {
        id: "C",
        text: "“脸色大变，赶紧找木头敲三下：‘呸呸呸，坏的不灵好的灵！’”",
        isHuman: true,
        aiReaction: "防御性迷信。人类害怕自己的狂妄会招致命运的惩罚。通过。"
      }
    ],
    scienceFact: {
      title: "抵消行为 (Undoing)",
      content: "心理学认为，敲木头是一种‘抵消’机制，试图通过仪式撤回可能带来厄运的言论。"
    }
  },
  {
    id: 45,
    title: "生日蜡烛 (Birthday Candles)",
    scenario: "蛋糕上插着燃烧的蜡烛，大家唱完歌。",
    aiPrompt: "明火有危险。建议立即熄灭并移除蜡质物体。",
    options: [
      {
        id: "A",
        text: "“用灭火器喷灭。”",
        isHuman: false,
        aiReaction: "高效但毁了蛋糕。机器。"
      },
      {
        id: "B",
        text: "“用手扇灭。”",
        isHuman: false,
        aiReaction: "普通物理操作。缺乏仪式感。嫌疑。"
      },
      {
        id: "C",
        text: "“闭眼，许个根本不可能实现的愿望，然后一口气吹灭。”",
        isHuman: true,
        aiReaction: "许愿。虽然概率学告诉我们愿望不会实现，但人类需要希望。通过。"
      }
    ],
    scienceFact: {
      title: "希望心理 (Psychology of Hope)",
      content: "许愿赋予了生活目标感和掌控感，即使它没有实际的因果效力。"
    }
  },
  {
    id: 46,
    title: "鬼屋 (Haunted House)",
    scenario: "你花钱买了票去鬼屋玩。",
    aiPrompt: "场景内均为工作人员扮演。无真实威胁。",
    options: [
      {
        id: "A",
        text: "“面无表情地走完全程，分析布景漏洞。”",
        isHuman: false,
        aiReaction: "无趣的杠精，或者是无法感知恐惧的机器。"
      },
      {
        id: "B",
        text: "“跟扮鬼的工作人员打招呼：‘兄弟辛苦了’。”",
        isHuman: false,
        aiReaction: "打破第四面墙。这太理智了。机器。"
      },
      {
        id: "C",
        text: "“虽然知道是假的，但还是吓得尖叫抓着前面人的衣服不放。”",
        isHuman: true,
        aiReaction: "悬置怀疑。人类能主动进入‘假装真实’的状态并享受恐惧。通过。"
      }
    ],
    scienceFact: {
      title: "自愿恐惧 (Voluntary Fear)",
      content: "在安全环境中体验恐惧能释放多巴胺和内啡肽，产生‘战栗快感’。"
    }
  },
  {
    id: 47,
    title: "过山车 (Roller Coaster)",
    scenario: "过山车爬升到最高点，即将俯冲。",
    aiPrompt: "检测到重力势能即将转化为动能。准备承受 G 力。",
    options: [
      {
        id: "A",
        text: "“调整坐姿对抗离心力。”",
        isHuman: false,
        aiReaction: "飞行员训练？机器。"
      },
      {
        id: "B",
        text: "“计算轨道曲率。”",
        isHuman: false,
        aiReaction: "物理学家？机器。"
      },
      {
        id: "C",
        text: "“举起双手！WHEEEEEE！啊啊啊啊！”",
        isHuman: true,
        aiReaction: "完全放弃控制。人类喜欢这种失控的坠落感。通过。"
      }
    ],
    scienceFact: {
      title: "感觉寻求 (Sensation Seeking)",
      content: "高唤醒体验（High Arousal）是部分人类对抗日常平庸的解药。"
    }
  },
  {
    id: 48,
    title: "可爱侵略性 (Cute Aggression)",
    scenario: "看到一只极其可爱的小猫咪。",
    aiPrompt: "幼体生物。应当提供照料和保护。",
    options: [
      {
        id: "A",
        text: "“提供食物和水。”",
        isHuman: false,
        aiReaction: "标准的保姆程序。机器。"
      },
      {
        id: "B",
        text: "“分析品种和血统。”",
        isHuman: false,
        aiReaction: "生物学家。机器。"
      },
      {
        id: "C",
        text: "“咬紧牙关：‘它太可爱了我想把它揉碎！我想吃掉它！’”",
        isHuman: true,
        aiReaction: "言语暴力？不，这是情绪过载的调节机制。人类通过产生攻击性念头来平衡过度的正面情绪。通过。"
      }
    ],
    scienceFact: {
      title: "可爱侵略性 (Cute Aggression)",
      content: "当积极情绪（可爱）过于强烈时，大脑会产生相反的情绪（攻击欲）来强制恢复平衡。"
    }
  },
  {
    id: 49,
    title: "哈欠传染 (Yawning)",
    scenario: "对面的人打了一个大大的哈欠。",
    aiPrompt: "检测到对方缺氧或疲劳。与本机无关。",
    options: [
      {
        id: "A",
        text: "“毫无反应。”",
        isHuman: false,
        aiReaction: "镜像神经元缺失。你没有共情能力。机器。"
      },
      {
        id: "B",
        text: "“询问对方睡眠质量。”",
        isHuman: false,
        aiReaction: "医疗问诊。机器。"
      },
      {
        id: "C",
        text: "“（不由自主地）也跟着打了一个大哈欠。”",
        isHuman: true,
        aiReaction: "传染性哈欠。这是灵长类动物社会联系和共情的体现。通过。"
      }
    ],
    scienceFact: {
      title: "镜像神经元 (Mirror Neurons)",
      content: "看到别人打哈欠会激活大脑中的镜像神经元，导致模仿行为。这与共情能力高度相关。"
    }
  },
  {
    id: 50,
    title: "挠痒痒 (Itch)",
    scenario: "被蚊子叮了一个包，很痒。",
    aiPrompt: "组胺反应。抓挠会导致皮肤破损感染。建议冷敷。",
    options: [
      {
        id: "A",
        text: "“涂抹药膏，忍住不抓。”",
        isHuman: false,
        aiReaction: "反人性的自制力。机器。"
      },
      {
        id: "B",
        text: "“分散注意力。”",
        isHuman: false,
        aiReaction: "理性策略。机器。"
      },
      {
        id: "C",
        text: "“掐个‘十字’！或者疯狂抓挠直到破皮流血，‘爽了’。”",
        isHuman: true,
        aiReaction: "以痛止痒。用轻微的疼痛信号掩盖瘙痒信号，这是人类原始的神经欺骗术。通过。"
      }
    ],
    scienceFact: {
      title: "闸门控制理论 (Gate Control Theory)",
      content: "疼痛信号可以抑制瘙痒信号的传输。在蚊子包上掐十字是利用疼痛来暂时缓解瘙痒。"
    }
  }
];