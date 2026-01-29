// ブルーロックPWC キャラクター・スキルデータ v2
const characterData = [
  {
    "name": "黒名蘭世【小柄なシャーク】",
    "type": "テクニック",
    "image": "https://img.game8.jp/12212859/fa117949ab8c622accb817074b3c83a1.webp/show",
    "trainingCards": [
      {"cardName": "ドリブルトレーニング", "skills": [{"skillName": "パス上手", "description": "スキル発動した際の自身のパス時のみ、パスカットされづらくなる。"}, {"skillName": "胆力", "description": "スキル発動した際のマッチアップにおいて、実力を発揮しやすくなる。"}, {"skillName": "絶妙な距離感", "description": "スキル発動時、しばらくの間、自身のテクニックが上昇する。また、少しの間、自身の賢さが上昇する。"}]},
      {"cardName": "イメージトレーニング", "skills": [{"skillName": "キープ力", "description": "スキル発動した際のパスカット時、マイボールにしやすくなる。"}, {"skillName": "切れ者", "description": "試合中、自身の賢さが増加する。"}, {"skillName": "抜群の敏捷性", "description": "スキル発動した際の突破時からしばらくの間、自身の突破成功率が上昇する。"}]},
      {"cardName": "ドリブルトレーニング", "skills": [{"skillName": "パス上手", "description": "スキル発動した際の自身のパス時のみ、パスカットされづらくなる。"}, {"skillName": "胆力", "description": "スキル発動した際のマッチアップにおいて、実力を発揮しやすくなる。"}, {"skillName": "抜群の敏捷性", "description": "スキル発動した際の突破時からしばらくの間、自身の突破成功率が上昇する。"}]}
    ]
  },
  {
    "name": "凪誠士郎【3周年記念Ver.】",
    "type": "スピード",
    "image": "https://img.game8.jp/12163292/0426b9e3d900a1fd46f6d25857975112.webp/show",
    "trainingCards": [
      {"cardName": "全力シャトルラン", "skills": [{"skillName": "突破口", "description": "スキル発動した際の突破時のみ、自身の能力が上昇する。"}, {"skillName": "疾風", "description": "スキル発動した際の突破時のみ、スピードを活かした突破が上手くなる。"}, {"skillName": "いまここ", "description": "スキル発動時、しばらくの間、自身のスピードが上昇する。また、少しの間、自身の賢さが上昇する。"}]},
      {"cardName": "全力シャトルラン", "skills": [{"skillName": "突破口", "description": "スキル発動した際の突破時のみ、自身の能力が上昇する。"}, {"skillName": "疾風", "description": "スキル発動した際の突破時のみ、スピードを活かした突破が上手くなる。"}, {"skillName": "いこっか", "description": "スキルが発動した突破成功時からしばらくの間、自身のドリブルスピードが上昇する。"}]},
      {"cardName": "全力シャトルラン", "skills": [{"skillName": "栄冠", "description": "スキル発動した際の突破時からしばらくの間、自身の突破成功率が上昇する。"}, {"skillName": "泰然自若", "description": "スキル発動時のシュートブロックからしばらくの間、自身のシュートブロック成功率が上昇する。"}, {"skillName": "王者の威風", "description": "スキル発動時のシュートからしばらくの間、自身のシュート成功率が上昇する。"}]}
    ]
  },
  {
    "name": "潔世一【3周年記念Ver.】",
    "type": "賢さ",
    "image": "https://img.game8.jp/12163291/9720d5c00df15479cf9e964997e63759.webp/show",
    "trainingCards": [
      {"cardName": "イメージトレーニング", "skills": [{"skillName": "ブロッカー", "description": "スキル発動した際のシュートブロック時のみ、自身のシュートブロックの成功率が上がる。"}, {"skillName": "チームプレー", "description": "自身を含むチームがゴールを決めると、自身のスタミナを回復することがある。"}, {"skillName": "ここだろ…", "description": "スキル発動時、しばらくの間、自身の賢さが上昇する。また、少しの間、自身のテクニックが上昇する。"}]},
      {"cardName": "イメージトレーニング", "skills": [{"skillName": "ブロッカー", "description": "スキル発動した際のシュートブロック時のみ、自身のシュートブロックの成功率が上がる。"}, {"skillName": "チームプレー", "description": "自身を含むチームがゴールを決めると、自身のスタミナを回復することがある。"}, {"skillName": "いや…違うな…", "description": "自身がシュートブロックに成功した場合に、しばらくの間、相手チームで一番賢さの高い選手のシュートブロック成功率を下げる。"}]},
      {"cardName": "イメージトレーニング", "skills": [{"skillName": "栄冠", "description": "スキル発動した際の突破時からしばらくの間、自身の突破成功率が上昇する。"}, {"skillName": "泰然自若", "description": "スキル発動時のシュートブロックからしばらくの間、自身のシュートブロック成功率が上昇する。"}, {"skillName": "王者の威風", "description": "スキル発動時のシュートからしばらくの間、自身のシュート成功率が上昇する。"}]}
    ]
  },
  {
    "name": "雪宮剣優【一瞬に見出す極限】",
    "type": "スピード",
    "image": "https://img.game8.jp/11991157/10014e5328ca20fee9b51e303412f933.webp/show",
    "trainingCards": [
      {"cardName": "全力シャトルラン", "skills": [{"skillName": "MF適正〇", "description": "ポジションがMFの際、試合中は自身の視野が広がりプレイが上手くなる。"}, {"skillName": "特攻", "description": "試合中、自身のキックとスピードが増加する。"}, {"skillName": "圧倒", "description": "スキル発動した際の突破時から少しの間、自身のスビードが上昇し、マッチアップにおいて実力を発揮しやすくなる。"}]},
      {"cardName": "スプリントダッシュ", "skills": [{"skillName": "MF適正〇", "description": "ポジションがMFの際、試合中は自身の視野が広がりプレイが上手くなる。"}, {"skillName": "特攻", "description": "試合中、自身のキックとスピードが増加する。"}, {"skillName": "圧倒", "description": "スキル発動した際の突破時から少しの間、自身のスビードが上昇し、マッチアップにおいて実力を発揮しやすくなる。"}]},
      {"cardName": "ロングレンジシュート練習", "skills": [{"skillName": "FW適正〇", "description": "ポジションがFWの際、試合中は自身の視野が広がりプレイが上手くなる。"}, {"skillName": "不屈", "description": "試合中、自身のキックとスタミナが増加する。"}, {"skillName": "最大値パフォーマンス", "description": "スキル発動時の攻撃中に限り、自身の突破成功率とシュート成功率が上昇する。"}]},
      {"cardName": "全力シャトルラン", "skills": [{"skillName": "MF適正〇", "description": "ポジションがMFの際、試合中は自身の視野が広がりプレイが上手くなる。"}, {"skillName": "特攻", "description": "試合中、自身のキックとスピードが増加する。"}, {"skillName": "最大値パフォーマンス", "description": "スキル発動時の攻撃中に限り、自身の突破成功率とシュート成功率が上昇する。"}]}
    ]
  },
  {
    "name": "氷織羊【X 自分にできる武器】",
    "type": "賢さ",
    "image": "https://img.game8.jp/11935294/c9ea55aef3ed8d28baff91c95bfdfaa0.webp/show",
    "trainingCards": [
      {"cardName": "イメージトレーニング", "skills": [{"skillName": "キープ力", "description": "スキル発動した際のパスカット時、マイボールにしやすくなる。"}, {"skillName": "ブロッカー", "description": "スキル発動した際のシュートブロック時のみ、自身のシュートブロックの成功率が上がる。"}, {"skillName": "監視", "description": "スキル発動時のパスカットに限り、自身のパスカット成功率が上昇する。"}]},
      {"cardName": "ロンドトレーニング", "skills": [{"skillName": "パス上手", "description": "スキル発動した際の自身のパス時のみ、パスカットされづらくなる。"}, {"skillName": "突破口", "description": "スキル発動した際の突破時のみ、自身の能力が上昇する。"}, {"skillName": "一瞬への集約", "description": "スキル発動時、少しの間、自身の賢さとテクニックが上昇する。"}]},
      {"cardName": "ロンドトレーニング", "skills": [{"skillName": "パス上手", "description": "スキル発動した際の自身のパス時のみ、パスカットされづらくなる。"}, {"skillName": "突破口", "description": "スキル発動した際の突破時のみ、自身の能力が上昇する。"}, {"skillName": "抜群のパスセンス", "description": "スキル発動時、少しの間、自身のパス成功率が上昇する。"}]},
      {"cardName": "イメージトレーニング", "skills": [{"skillName": "キープ力", "description": "スキル発動した際のパスカット時、マイボールにしやすくなる。"}, {"skillName": "ブロッカー", "description": "スキル発動した際のシュートブロック時のみ、自身のシュートブロックの成功率が上がる。"}, {"skillName": "やれるだけのこと", "description": "スキル発動時、少しの間、自身の賢さとパスカット成功率が上昇する。"}]}
    ]
  },
  {
    "name": "烏旅人【X 弱点がないなら創るまで】",
    "type": "テクニック",
    "image": "https://img.game8.jp/11867069/baf4c486c761f2c4c1719917ce1b12ac.webp/show",
    "trainingCards": [
      {"cardName": "ドリブルトレーニング", "skills": [{"skillName": "幻惑", "description": "スキル発動した際の突破時のみ、テクニックを活かした突破が上手くなる。"}, {"skillName": "巧手", "description": "試合中、自身のテクニックが増加する。"}, {"skillName": "インストール", "description": "スキル発動時、しばらくの間、自身のテクニックが上昇する。"}]},
      {"cardName": "スプリントダッシュ", "skills": [{"skillName": "胆力", "description": "スキル発動した際のマッチアップにおいて、実力を発揮しやすくなる。"}, {"skillName": "刹那", "description": "試合中、自身のスピードとテクニックが増加する。"}, {"skillName": "一擊必殺", "description": "スキル発動時の攻撃中に限り、自身の突破成功率が上昇する。"}]},
      {"cardName": "スプリントダッシュ", "skills": [{"skillName": "胆力", "description": "スキル発動した際のマッチアップにおいて、実力を発揮しやすくなる。"}, {"skillName": "刹那", "description": "試合中、自身のスピードとテクニックが増加する。"}, {"skillName": "アウトプット", "description": "スキル発動時の攻撃中に限り、自身のテクニックとスビードが大幅に上昇する。"}]},
      {"cardName": "ドリブルトレーニング", "skills": [{"skillName": "幻惑", "description": "スキル発動した際の突破時のみ、テクニックを活かした突破が上手くなる。"}, {"skillName": "巧手", "description": "試合中、自身のテクニックが増加する。"}, {"skillName": "絶妙な加勢", "description": "スキル発動時の攻撃中に限り、自身の突破成功率とパス成功率が上昇する。"}]}
    ]
  },
  {
    "name": "馬狼照英【貪り喰らう咆哮】",
    "type": "キック",
    "image": "https://img.game8.jp/11818485/f81e2e076a293431e0d9b2f15e7d41e6.webp/show",
    "trainingCards": [
      {"cardName": "対BLMシュート練習", "skills": [{"skillName": "崖っぷち", "description": "相手チームにリードされている時、自身のシュート成功率が上がる。"}, {"skillName": "鉄脚", "description": "試合中、自身のキックが増加する。"}, {"skillName": "総攻撃", "description": "スキル発動時、しばらくの間、味方全体のキックとフィジカルが上昇する。"}]},
      {"cardName": "対BLMシュート練習", "skills": [{"skillName": "崖っぷち", "description": "相手チームにリードされている時、自身のシュート成功率が上がる。"}, {"skillName": "鉄脚", "description": "試合中、自身のキックが増加する。"}, {"skillName": "総攻撃", "description": "スキル発動時、しばらくの間、味方全体のキックとフィジカルが上昇する。"}]},
      {"cardName": "筋トレマシン", "skills": [{"skillName": "突破口", "description": "スキル発動した際の突破時のみ、自身の能力が上昇する。"}, {"skillName": "頑健", "description": "スキル発動した際の突破阻止時のみ、フィジカルを活かした突破を防ぎやすくなる。"}, {"skillName": "初めからそのつもりだぜ？", "description": "スキル発動した際の突破時からしばらくの間、自身の突破成功率とシュート成功率が上昇する。"}]},
      {"cardName": "対BLMシュート練習", "skills": [{"skillName": "崖っぷち", "description": "相手チームにリードされている時、自身のシュート成功率が上がる。"}, {"skillName": "鉄脚", "description": "試合中、自身のキックが増加する。"}, {"skillName": "俺がブルーロックの王になる", "description": "スキル発動した際のシュートからしばらくの間、自身のシュート成功率が上昇する。"}]}
    ]
  },
  {
    "name": "國神錬介【正々堂々肉体勝負】",
    "type": "フィジカル",
    "image": "https://img.game8.jp/11768533/4ecd44dfa3c67b5970df684598f770b3.webp/show",
    "trainingCards": [
      {"cardName": "筋トレマシン", "skills": [{"skillName": "嗅覚", "description": "スキル発動した際のセカンドボール争いの時のみ、マイボールにする確率が上昇する。"}, {"skillName": "チームプレー", "description": "自身を含むチームがゴールを決めると、自身のスタミナを回復することがある。"}, {"skillName": "破壊力", "description": "スキル発動時、少しの間、自身のフィジカルと賢さが上昇する。"}]},
      {"cardName": "ハーネストレーニング", "skills": [{"skillName": "嗅覚", "description": "スキル発動した際のセカンドボール争いの時のみ、マイボールにする確率が上昇する。"}, {"skillName": "チームプレー", "description": "自身を含むチームがゴールを決めると、自身のスタミナを回復することがある。"}, {"skillName": "破壊力", "description": "スキル発動時、少しの間、自身のフィジカルと賢さが上昇する。"}]},
      {"cardName": "ポジティブシンキング", "skills": [{"skillName": "戦術眼", "description": "スキル発動した際のパスカット時のみ、自身のパスカットの成功率が上がる。"}, {"skillName": "才気", "description": "試合中、自身のフィジカルと賢さが増加する。"}, {"skillName": "逃げんなよ", "description": "スキル発動した際の突破阻止時からしばらくの間、自身のフィジカルを上げ、マッチアップ相手の突破成功率を下げる。"}]},
      {"cardName": "筋トレマシン", "skills": [{"skillName": "嗅覚", "description": "スキル発動した際のセカンドボール争いの時のみ、マイボールにする確率が上昇する。"}, {"skillName": "チームプレー", "description": "自身を含むチームがゴールを決めると、自身のスタミナを回復することがある。"}, {"skillName": "来いよ！", "description": "スキル発動した際の突破阻止時からしばらくの間、自身のフィジカルを上げる。"}]}
    ]
  },
  {
    "name": "三笘薫【受け止めた勝利】",
    "type": "フィジカル",
    "image": "https://img.game8.jp/11719352/02d7311051e9350b0f8e08d9d0a82ba5.webp/show",
    "trainingCards": [
      {"cardName": "筋トレマシン", "skills": [{"skillName": "剛力", "description": "スキル発動した際の突破時のみ、フィジカルを活かした突破が上手くなる。"}, {"skillName": "屈強", "description": "試合中、自身のスピードとフィジカルが増加する。"}, {"skillName": "ストイック", "description": "スキル発動時、少しの間、自身のフィジカルが上昇する。"}]},
      {"cardName": "筋トレマシン", "skills": [{"skillName": "堅固", "description": "スキル発動した際の突破阻止時のみ、自身の能力が上昇する。"}, {"skillName": "精緻", "description": "試合中、自身のフィジカルとテクニックが増加する。"}, {"skillName": "ストイック", "description": "スキル発動時、少しの間、自身のフィジカルが上昇する。"}]},
      {"cardName": "ハーネストレーニング", "skills": [{"skillName": "剛力", "description": "スキル発動した際の突破時のみ、フィジカルを活かした突破が上手くなる。"}, {"skillName": "屈強", "description": "試合中、自身のスピードとフィジカルが増加する。"}, {"skillName": "積み重ね", "description": "スキル発動した際の突破阻止時から一定時間、自身のフィジカルを上げ、マッチアップ相手のパフォーマンスを下げる。"}]},
      {"cardName": "筋トレマシン", "skills": [{"skillName": "剛力", "description": "スキル発動した際の突破時のみ、フィジカルを活かした突破が上手くなる。"}, {"skillName": "屈強", "description": "試合中、自身のスピードとフィジカルが増加する。"}, {"skillName": "挑戦者の姿勢", "description": "スキル発動した際の突破時からしばらくの間、自身のフィジカルを上げ、突破成功率を上げる。"}]}
    ]
  },
  {
    "name": "士道龍聖【歓喜の\"誕生\"】",
    "type": "キック",
    "image": "https://img.game8.jp/11719353/6182e67413151fbf130ffd51831846bc.webp/show",
    "trainingCards": [
      {"cardName": "対BLMシュート練習", "skills": [{"skillName": "シュート上手", "description": "スキル発動した際の自身のシュート時のみ、シュートブロックされづらくなる。"}, {"skillName": "鉄脚", "description": "試合中、自身のキックが増加する。"}, {"skillName": "さぁ出せ！！", "description": "スキル発動時、少しの間、自身のキックとシュート実行率が上昇する。"}]},
      {"cardName": "対BLMシュート練習", "skills": [{"skillName": "ふり絞り", "description": "スタミナが減ったとき、一時的に自身の能力が増加することがある。"}, {"skillName": "特攻", "description": "試合中、自身のキックとスピードが増加する。"}, {"skillName": "さぁ出せ！！", "description": "スキル発動時、少しの間、自身のキックとシュート実行率が上昇する。"}]},
      {"cardName": "ロングレンジシュート練習", "skills": [{"skillName": "シュート上手", "description": "スキル発動した際の自身のシュート時のみ、シュートブロックされづらくなる。"}, {"skillName": "鉄脚", "description": "試合中、自身のキックが増加する。"}, {"skillName": "電波ビンビン丸", "description": "スキル発動時、しばらくの間、自身のシュート成功率とシュートレンジが上昇する。"}]},
      {"cardName": "対BLMシュート練習", "skills": [{"skillName": "シュート上手", "description": "スキル発動した際の自身のシュート時のみ、シュートブロックされづらくなる。"}, {"skillName": "鉄脚", "description": "試合中、自身のキックが増加する。"}, {"skillName": "歓喜の誕生", "description": "スキル発動した際のシュート時からしばらくの間、自身のシュート成功率とキックが上昇する。"}]}
    ]
  },
  {
    "name": "七星虹郎【X トレッキング・トレーニング】",
    "type": "テクニック",
    "image": "https://img.game8.jp/11676757/708a3f56fade9d1866d010cded8438c6.webp/show",
    "trainingCards": [
      {"cardName": "ドリブルトレーニング", "skills": [{"skillName": "MF適正〇", "description": "ポジションがMFの際、試合中は自身の視野が広がりプレイが上手くなる。"}, {"skillName": "トラップ上手", "description": "スキルが発動するとパスを受けたあと、今回の攻撃中に限り自身の能力が増加する。"}, {"skillName": "トレッキング", "description": "スキル発動時、しばらくの間、自身のテクニックと突破成功率が上昇する。"}]},
      {"cardName": "対BLMシュート練習", "skills": [{"skillName": "FW適正〇", "description": "ポジションがFWの際、試合中は自身の視野が広がりプレイが上手くなる。"}, {"skillName": "崖っぷち", "description": "相手チームにリードされている時、自身のシュート成功率が上がる。"}, {"skillName": "成長のチャンス", "description": "スキル発動時、しばらくの間、自身のキックとシュート成功率が大幅に上昇する。"}]},
      {"cardName": "ロンドトレーニング", "skills": [{"skillName": "MF適正〇", "description": "ポジションがMFの際、試合中は自身の視野が広がりプレイが上手くなる。"}, {"skillName": "トラップ上手", "description": "スキルが発動するとパスを受けたあと、今回の攻撃中に限り自身の能力が増加する。"}, {"skillName": "自然の恵み", "description": "試合中、味方全体にパス成功率・パスカット成功率・シュート成功率・突破成功率が上昇する。"}]}
    ]
  },
  {
    "name": "オリヴァ・愛空【オールMAXで視える世界】",
    "type": "フィジカル",
    "image": "https://img.game8.jp/11676758/370be648e39ccdd3a5e34cadef441bf7.webp/show",
    "trainingCards": [
      {"cardName": "筋トレマシン", "skills": [{"skillName": "ブロッカー", "description": "スキル発動した際のシュートブロック時のみ、自身のシュートブロックの成功率が上がる。"}, {"skillName": "強筋", "description": "試合中、自身のフィジカルが増加する。"}, {"skillName": "良策", "description": "スキル発動時、しばらくの間、自身のフィジカルが上昇する。"}]},
      {"cardName": "筋トレマシン", "skills": [{"skillName": "DF適正〇", "description": "ポジションがDFの際、試合中は自身の視野が広がりプレイが上手くなる。"}, {"skillName": "胆力", "description": "スキル発動した際のマッチアップにおいて、実力を発揮しやすくなる。"}, {"skillName": "良策", "description": "スキル発動時、しばらくの間、自身のフィジカルが上昇する。"}]},
      {"cardName": "ハーネストレーニング", "skills": [{"skillName": "ブロッカー", "description": "スキル発動した際のシュートブロック時のみ、自身のシュートブロックの成功率が上がる。"}, {"skillName": "強筋", "description": "試合中、自身のフィジカルが増加する。"}, {"skillName": "充分な確率", "description": "スキル発動時のセカンドボールの競り合いに限り、自身がマイボールにする確率が大幅に上昇する。"}]},
      {"cardName": "筋トレマシン", "skills": [{"skillName": "ブロッカー", "description": "スキル発動した際のシュートブロック時のみ、自身のシュートブロックの成功率が上がる。"}, {"skillName": "強筋", "description": "試合中、自身のフィジカルが増加する。"}, {"skillName": "やるべきことを", "description": "スキル発動した際の突破阻止時からしばらくの間、自身のフィジカルと賢さを上げ、マッチアップ相手の突破成功率を下げる。"}]}
    ]
  },
  {
    "name": "糸師凛【SEASIDE EGOIST】",
    "type": "キック",
    "image": "https://img.game8.jp/11607291/6b41f5e9873d4c4d8e162ced800c7f29.webp/show",
    "trainingCards": [
      {"cardName": "ロングレンジシュート練習", "skills": [{"skillName": "ゴールの方程式", "description": "スキル発動した際のシュート時のみ、自チームで一番キックが高い場合自身のシュート成功率が上がる。"}, {"skillName": "美技", "description": "試合中、自身のキックとテクニックが増加する。"}, {"skillName": "壊せ！！！", "description": "スキル発動した際のシュートからしばらくの間、自身のキックが上昇し、相手チーム内で一番賢さが高い選手の賢さを下げる。"}]},
      {"cardName": "ロンドトレーニング", "skills": [{"skillName": "幻惑", "description": "スキル発動した際の突破時のみ、テクニックを活かした突破が上手くなる。"}, {"skillName": "見切", "description": "スキル発動した際の突破阻止時のみ、テクニックを活かした突破を防ぎやすくなる。"}, {"skillName": "壊せ！！！", "description": "スキル発動した際のシュートからしばらくの間、自身のキックが上昇し、相手チーム内で一番賢さが高い選手の賢さを下げる。"}]},
      {"cardName": "ドリブルトレーニング", "skills": [{"skillName": "幻惑", "description": "スキル発動した際の突破時のみ、テクニックを活かした突破が上手くなる。"}, {"skillName": "見切", "description": "スキル発動した際の突破阻止時のみ、テクニックを活かした突破を防ぎやすくなる。"}, {"skillName": "攻撃全振り", "description": "ボールが相手ゴールに近い時に少しの間、自身のキックとシュート成功率が上昇する。"}]},
      {"cardName": "ロングレンジシュート練習", "skills": [{"skillName": "ゴールの方程式", "description": "スキル発動した際のシュート時のみ、自チームで一番キックが高い場合自身のシュート成功率が上がる。"}, {"skillName": "美技", "description": "試合中、自身のキックとテクニックが増加する。"}, {"skillName": "SUMMER SPARK", "description": "スキル発動した際のシュートからしばらくの間、自身のキックとシュート成功率を上げる。"}]}
    ]
  },
  {
    "name": "糸師冴【SEASIDE EGOIST】",
    "type": "スピード",
    "image": "./images/itoshi_sae_seaside.png",
    "trainingCards": [
      {"cardName": "スプリントダッシュ", "skills": [{"skillName": "疾風", "description": "スキル発動した際の突破時のみ、スピードを活かした突破が上手くなる。"}, {"skillName": "鋭敏", "description": "試合中、自身のスピードと賢さが増加する。"}, {"skillName": "得点到達点", "description": "スキル発動時、しばらくの間、自身のスピードと賢さが上昇する。"}]},
      {"cardName": "ポジティブシンキング", "skills": [{"skillName": "戦術眼", "description": "スキル発動した際のパスカット時のみ、自身のパスカットの成功率が上がる。"}, {"skillName": "伸足", "description": "スキル発動した際のシュートブロック時、ボールに触りやすくなる。"}, {"skillName": "得点到達点", "description": "スキル発動時、しばらくの間、自身のスピードと賢さが上昇する。"}]},
      {"cardName": "イメージトレーニング", "skills": [{"skillName": "戦術眼", "description": "スキル発動した際のパスカット時のみ、自身のパスカットの成功率が上がる。"}, {"skillName": "伸足", "description": "スキル発動した際のシュートブロック時、ボールに触りやすくなる。"}, {"skillName": "見出す最善手", "description": "スキル発動時、しばらくの間、自身のパスカット成功率とシュートブロック成功率が上昇する。"}]},
      {"cardName": "全力シャトルラン", "skills": [{"skillName": "疾風", "description": "スキル発動した際の突破時のみ、スピードを活かした突破が上手くなる。"}, {"skillName": "鋭敏", "description": "試合中、自身のスピードと賢さが増加する。"}, {"skillName": "見出す最善手", "description": "スキル発動時、しばらくの間、自身のパスカット成功率とシュートブロック成功率が上昇する。"}]}
    ]
  },
  {
    "name": "千切豹馬【ブリリアント・ブーケ】",
    "type": "賢さ",
    "image": "./images/chigiri_bouquet.png",
    "trainingCards": [
      {"cardName": "イメージトレーニング", "skills": [{"skillName": "ブロッカー", "description": "スキル発動した際のシュートブロック時のみ、自身のシュートブロックの成功率が上がる。"}, {"skillName": "切れ者", "description": "試合中、自身の賢さが増加する。"}, {"skillName": "気分屋", "description": "スキル発動時、しばらくの間、自身の賢さとフィジカルが上昇する。"}]},
      {"cardName": "筋トレマシン", "skills": [{"skillName": "嗅覚", "description": "スキル発動した際のセカンドボール争いの時のみ、マイボールにする確率が上昇する。"}, {"skillName": "突破口", "description": "スキル発動した際の突破時のみ、自身の能力が上昇する。"}, {"skillName": "気分屋", "description": "スキル発動時、しばらくの間、自身の賢さとフィジカルが上昇する。"}]},
      {"cardName": "ポジティブシンキング", "skills": [{"skillName": "ブロッカー", "description": "スキル発動した際のシュートブロック時のみ、自身のシュートブロックの成功率が上がる。"}, {"skillName": "切れ者", "description": "試合中、自身の賢さが増加する。"}, {"skillName": "瞬発力", "description": "スキル発動時、しばらくの間、自身のシュートブロック成功率とパスカット成功率が上昇する。"}]},
      {"cardName": "ハーネストレーニング", "skills": [{"skillName": "嗅覚", "description": "スキル発動した際のセカンドボール争いの時のみ、マイボールにする確率が上昇する。"}, {"skillName": "突破口", "description": "スキル発動した際の突破時のみ、自身の能力が上昇する。"}, {"skillName": "瞬発力", "description": "スキル発動時、しばらくの間、自身のシュートブロック成功率とパスカット成功率が上昇する。"}]}
    ]
  },
  {
    "name": "凪誠士郎【はじめまして日本】",
    "type": "キック",
    "image": "./images/nagi_hajimemashite.png",
    "trainingCards": [
      {"cardName": "対BLMシュート練習", "skills": [{"skillName": "崖っぷち", "description": "相手チームにリードされている時、自身のシュート成功率が上がる。"}, {"skillName": "鉄脚", "description": "試合中、自身のキックが増加する。"}, {"skillName": "ようこそ戦場へ", "description": "スキル発動時、しばらくの間、自身のシュート成功率とシュート実行率が大幅に上昇する。"}]},
      {"cardName": "ロングレンジシュート練習", "skills": [{"skillName": "崖っぷち", "description": "相手チームにリードされている時、自身のシュート成功率が上がる。"}, {"skillName": "鉄脚", "description": "試合中、自身のキックが増加する。"}, {"skillName": "ちゃんと見てろよ", "description": "スキル発動時、しばらくの間、自身のシュート成功率とシュート実行率が上昇する。"}]}
    ]
  },
  {
    "name": "蜂楽廻【怪物夢中】",
    "type": "テクニック",
    "image": "./images/bachira_kaibutsu.png",
    "trainingCards": [
      {"cardName": "ドリブルトレーニング", "skills": [{"skillName": "幻惑", "description": "スキル発動した際の突破時のみ、テクニックを活かした突破が上手くなる。"}, {"skillName": "胆力", "description": "スキル発動した際のマッチアップにおいて、実力を発揮しやすくなる。"}, {"skillName": "ぎゅる！ぎゅる！", "description": "スキル発動時、しばらくの間、自身のテクニックと突破成功率が上昇する。"}]},
      {"cardName": "ロンドトレーニング", "skills": [{"skillName": "伸足", "description": "スキル発動した際のシュートブロック時、ボールに触りやすくなる。"}, {"skillName": "切れ者", "description": "試合中、自身の賢さが増加する。"}, {"skillName": "ぎゅる！ぎゅる！", "description": "スキル発動時、しばらくの間、自身のテクニックと突破成功率が上昇する。"}]},
      {"cardName": "イメージトレーニング", "skills": [{"skillName": "伸足", "description": "スキル発動した際のシュートブロック時、ボールに触りやすくなる。"}, {"skillName": "切れ者", "description": "試合中、自身の賢さが増加する。"}, {"skillName": "にゃにゃ！にゃっつ！", "description": "スキル発動時、しばらくの間、自身のテクニックと賢さが大幅に上昇する。"}]}
    ]
  },
  {
    "name": "潔世一【\"青い監獄\"の心臓】",
    "type": "賢さ",
    "image": "./images/isagi_shinzo.png",
    "trainingCards": [
      {"cardName": "ポジティブシンキング", "skills": [{"skillName": "戦術眼", "description": "スキル発動した際のパスカット時のみ、自身のパスカットの成功率が上がる。"}, {"skillName": "切れ者", "description": "試合中、自身の賢さが増加する。"}, {"skillName": "妨害工作", "description": "スキル発動時、しばらくの間、自身のシュートブロック成功率とシュートを弾く確率が上昇する。"}]},
      {"cardName": "イメージトレーニング", "skills": [{"skillName": "戦術眼", "description": "スキル発動した際のパスカット時のみ、自身のパスカットの成功率が上がる。"}, {"skillName": "切れ者", "description": "試合中、自身の賢さが増加する。"}, {"skillName": "妨害工作", "description": "スキル発動時、しばらくの間、自身のシュートブロック成功率とシュートを弾く確率が上昇する。"}]},
      {"cardName": "対BLMシュート練習", "skills": [{"skillName": "シュート上手", "description": "スキル発動した際の自身のシュート時のみ、シュートブロックされづらくなる。"}, {"skillName": "崖っぷち", "description": "相手チームにリードされている時、自身のシュート成功率が上がる。"}, {"skillName": "奪えば勝機", "description": "スキル発動した際の突破阻止時にしばらくの間、マッチアップ相手の突破成功率を大幅に下げる。"}]}
    ]
  },
  {
    "name": "千切豹馬【最速の韋駄天】",
    "type": "スピード",
    "image": "./images/chigiri_idaten.png",
    "trainingCards": [
      {"cardName": "スプリントダッシュ", "skills": [{"skillName": "疾風", "description": "スキル発動した際の突破時のみ、スピードを活かした突破が上手くなる。"}, {"skillName": "胆力", "description": "スキル発動した際のマッチアップにおいて、実力を発揮しやすくなる。"}, {"skillName": "スプリット", "description": "スキル発動時、しばらくの間、自身のスピードと突破成功率が上昇する。"}]},
      {"cardName": "全力シャトルラン", "skills": [{"skillName": "俊敏", "description": "試合中、自身のスピードが増加する。"}, {"skillName": "下剋上", "description": "マッチアップ相手のステータスが自分よりかなり高いと、スキル発動した際の突破時のみ自身の能力が上がる。"}, {"skillName": "スプリット", "description": "スキル発動時、しばらくの間、自身のスピードと突破成功率が上昇する。"}]}
    ]
  },
  {
    "name": "糸師凛【破壊者】",
    "type": "スピード",
    "image": "./images/itoshi_rin_hakaisha.png",
    "trainingCards": [
      {"cardName": "全力シャトルラン", "skills": [{"skillName": "シュート上手", "description": "スキル発動した際の自身のシュート時のみ、シュートブロックされづらくなる。"}, {"skillName": "鉄脚", "description": "試合中、自身のキックが増加する。"}, {"skillName": "破壊者", "description": "スキル発動時、しばらくの間、自身のシュート成功率とシュート実行率が大幅に上昇する。"}]},
      {"cardName": "スプリントダッシュ", "skills": [{"skillName": "シュート上手", "description": "スキル発動した際の自身のシュート時のみ、シュートブロックされづらくなる。"}, {"skillName": "鉄脚", "description": "試合中、自身のキックが増加する。"}, {"skillName": "絶望の境地", "description": "スキル発動時、しばらくの間、自身のシュート成功率とシュート実行率が上昇する。"}]}
    ]
  },
  {
    "name": "糸師冴【『美しく壊す』哲学】",
    "type": "テクニック",
    "image": "./images/itoshi_sae_tetsugaku.png",
    "trainingCards": [
      {"cardName": "ドリブルトレーニング", "skills": [{"skillName": "幻惑", "description": "スキル発動した際の突破時のみ、テクニックを活かした突破が上手くなる。"}, {"skillName": "巧手", "description": "試合中、自身のテクニックが増加する。"}, {"skillName": "美しく壊す", "description": "スキル発動時、しばらくの間、自身のテクニックとシュート成功率が大幅に上昇する。"}]},
      {"cardName": "ロンドトレーニング", "skills": [{"skillName": "幻惑", "description": "スキル発動した際の突破時のみ、テクニックを活かした突破が上手くなる。"}, {"skillName": "巧手", "description": "試合中、自身のテクニックが増加する。"}, {"skillName": "哲学的思考", "description": "スキル発動時、しばらくの間、自身のテクニックとパス成功率が上昇する。"}]}
    ]
  }
];

// スキルカテゴリ分類
const skillCategories = {
  "パス系": ["パス上手", "キープ力", "抜群のパスセンス", "トラップ上手"],
  "突破系": ["突破口", "疾風", "幻惑", "剛力", "胆力", "スプリット", "圧倒", "一擊必殺", "アウトプット", "インストール"],
  "シュート系": ["シュート上手", "崖っぷち", "ゴールの方程式", "破壊者", "電波ビンビン丸", "歓喜の誕生", "総攻撃", "SUMMER SPARK", "壊せ！！！", "ようこそ戦場へ", "美しく壊す"],
  "守備系": ["ブロッカー", "戦術眼", "嗅覚", "頑健", "堅固", "見切", "監視", "伸足", "妨害工作", "奪えば勝機"],
  "ステータス上昇": ["切れ者", "鉄脚", "強筋", "俊敏", "巧手", "屈強", "精緻", "鋭敏", "美技", "刹那", "才気", "特攻", "不屈"],
  "特殊効果": ["チームプレー", "ふり絞り", "MF適正〇", "FW適正〇", "DF適正〇", "栄冠", "泰然自若", "王者の威風", "自然の恵み", "下剋上"]
};
