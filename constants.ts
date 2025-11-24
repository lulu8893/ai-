import { Level } from './types';

export const INITIAL_CAMOUFLAGE = 50;
export const CORRECT_BONUS = 20;
export const WRONG_PENALTY = 30;

export const LEVELS: Level[] = [
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
  }
];