/**
 * 页面正文内容（模板用户主要编辑这个文件）
 * 结构说明见 README.md
 */

window.PAGE_CONTENT = {
  // 百科风格标题（正文最上方的蓝框大标题）
  intro: {
    title: "5&middot;12汶川地震",
    // 简介段落，按顺序显示
    paragraphs: [
      "5&middot;12汶川地震（the Wenchuan earthquake in\n                  2008），又称“汶川大地震”，发生于北京时间2008年5月12日14时28分4秒，震中位于四川省阿坝藏族羌族自治州汶川县映秀镇（北纬31.0&deg;、东经103.4&deg;）。",
      "根据中国地震局修订后的数据，5&middot;12汶川地震的面波震级为8.0级。根据日本气象厅的数据，5&middot;12汶川地震的地震波确认共环绕了地球6圈。地震波及大半个中国以及亚洲多个国家和地区，中国国内北至内蒙古，东至上海，西至西藏，南至中国香港、中国台湾等地区均有震感，中国之外的泰国、越南、菲律宾和日本等国均有震感。",
      "5&middot;12汶川地震严重破坏地区约50万平方千米，其中，极重灾区共10个县（市），较重灾区共41个县（市），一般灾区共186个县（市）。截至2008年9月25日，5&middot;12汶川地震共计造成69227人遇难、17923人失踪、374643人不同程度受伤、1993.03万人失去住所，受灾总人口达4625.6万人。截至2008年9月，5&middot;12汶川地震造成直接经济损失8451.4亿元。5&middot;12汶川地震是中华人民共和国成立以来破坏性最强、波及范围最广、灾害损失最重、救灾难度最大的一次地震。",
      "2009年3月2日，经中华人民共和国国务院批准，自2009年起，每年5月12日为全国“防灾减灾日”。",
    ],
    // 基本信息表格：name 为字段名、value 为内容（自动双列排布）
    facts: [
      { name: "中文名：", value: "5·12汶川地震" },
      { name: "外文名称：", value: "5.12 Wenchuan earthquake" },
      { name: "发生时间：", value: "2008年5月12日 14时28分4秒" },
      { name: "发生地：", value: "四川省汶川县" },
      { name: "别名：", value: "汶川大地震" },
      { name: "震中位置：", value: "四川省汶川县映秀镇(北纬31.0°、东经103.4°)" },
      { name: "震源深度：", value: "14千米" },
      { name: "震级：", value: "里氏8.0级(中国地震局测定)" },
      { name: "伤亡人数：", value: "69227人遇难，17923人失踪，374643人不同程度受伤(截至2008年9月25日)<br />" },
    ]
  },

  // 正文分节：id 用于锚点（item0、item1 ...），title 用于侧边菜单和目录
  sections: [
    {
      id: "item0",
      title: "地震背景",
      html: `
              <h3><i class="fa fa-play" aria-hidden="true"></i> 地质构造</h3>
              <div class="content">
                <p>
                  5&middot;12汶川地震发生在四川龙门山逆冲推覆构造带上。该次发震的龙门山断裂带总体呈NE—SW走向，由三条主断裂组成，分别是安县—灌县断裂，也称前山断裂；北川—映秀断裂，也称中央断裂；汶川—茂汶断裂，也称后山断裂。8.0级强震就发生在中央断裂，即北川—映秀断裂上，震中位置更靠近映秀（这个断裂带的历史地震尚未超过7级）。
                </p>
                <div align="center" class="tupian">
                  <img
                    id="tsvg"
                    src="images/7dd98d1001e93901213f17e0cfbe43e736d12e2e38e8.jpg"
                  />
                  <br />
                  <span style="font-size: 12px;">青藏高原东部及邻区活动构造及大地震分布图</span>
                </div>
                <p>
                  龙门山断裂带既是青藏高原的东界，又是龙门山前陆盆地的西界，它南起于泸定、天全，向NE延伸，经都江堰、江油、广元进入陕西勉县一带，全长约500千米，总宽度30～50千米，总体走向NE40&deg;～50&deg;，倾向NW，NE与大巴山冲断带相交，SW与康滇地轴相截，由一系列大致平行的叠瓦状冲断带构成，具典型的推覆构造特征。其北西侧是松潘甘孜褶皱带，南东为四川盆地。三条主干断裂基本特征及新构造活动特性如下。
                </p>
                <h4>▪ 龙门山前山（主边界）断裂</h4>
                <p>
                  龙门山前山（主边界）断裂，通常称安县一灌县断裂。断裂南西端始于天全附近，向北东延伸经芦山大川、都江堰、彭州市通济场、安县、江油、广元插入陕西汉中一带消失，总体走向呈NE35&deg;～45&deg;，断面倾向NW，倾角30&deg;～50&deg;，为脆性逆断层。该断裂是龙门山前陆盆地内部一条延伸长度较大的断裂，全长500余千米，由北东段的马角坝断裂、中段的都江堰—二王庙断裂、西南段的大川—天全断裂，在平面上呈左行雁列展布构成；断裂破碎带宽度一般在数米至20余米之间，显示北西盘相对上冲，且具右旋走滑运动的脆性破裂特征
                  。
                </p>
                <p>
                  该断裂的北段是中低山和丘陵的分界带，南段控制了成都平原的西界，显示出其新活动性由西南向东北减弱的特点，属中、晚更新世活动断裂。地震活动强度大川一天全段相对其他地段强，1970年大邑西6.2级地震就发生在该段上，并产生了地表破裂。
                </p>
                <p></p>
                <h4>▪ 龙门山主中央断裂</h4>
                <p>
                  龙门山主中央断裂也称北川—映秀断裂，是汶川大地震得主发震断裂。该断裂线性影像清晰，活动构造地貌保存较为完好，在龙门山构造带几条主干断裂中显示出较强的活动性。以此断裂为界，断裂西侧为龙门山高山区，海拔高程为3000～4000米，东侧则为海拔高程在1000～2000米的中低山区，地貌反差显著。
                </p>
                <p>
                  该断裂的西南端始于泸定附近，向北东延伸经盐井、映秀、太平、北川、南坝、青川、茶坝插入陕西境内，与勉县—阳平关断裂相交，斜贯整个龙门山，长达500余千米。由北川—茶坝—林庵寺断裂、北川—映秀断裂、北川—青川断裂组成。断裂总体走向NE35&deg;～35&deg;，倾向NW，倾角60&deg;左右，系由数条次级逆断层组成的叠瓦式构造带。沿断裂带主要发育有断层角砾岩、碎裂岩等代表脆性变形的断层岩类，局部可见碳酸盐糜棱岩，表现出脆—韧性过渡的特征。该断裂为一条在中、晚更新世有活动的断裂，其中以北川—太平场一段活动最强，为中、晚更新世以来最强的活动段。汶川地震就发生映秀—北川—青川断裂上。
                </p>
                <p></p>
                <h4>▪ 龙门山后山断裂</h4>
                <p>
                  由平武—青川断裂、汶川—茂汶和耿达—陇东等断裂组成。该断裂带的西南端在泸定冷碛附近与南北向的大渡河断裂相交，向北东经陇东、渔子溪、耿达、草坡、汶川、茂汶、平武、青川插入陕西境内，延伸500余公里。其中，茂汶—汶川断裂，走向NNE—NE，由一系列倾向NW的叠瓦状逆冲断层组成，在早更新世活动明显，中、晚更新世仍有活动。平武—青川断裂，西起平武茶坊，向东经青川、阳平关达勉县，延伸数百公里，走向呈NEE向，倾向为NNW、倾角为60&deg;～80&deg;，是由数条近于平行的断裂组成的断裂带，总体上表现为逆冲为主同时兼右旋走滑特征，为一条全新世的中、弱活动性断裂。
                </p>
              </div>
              <h3>
                <i class="fa fa-play" aria-hidden="true"></i> 地震成因
              </h3>
              <div class="content">
                <p>
                  5&middot;12汶川地震的发生及龙门山向东南方向推覆的动力来源是印度板块与欧亚大陆碰撞及其向北的推挤，这一板块间的相对运动导致了亚洲大陆内部大规模的构造变形，造成了青藏高原的地壳缩短、地貌隆升和向东挤出。由于青藏高原在向东北方向运动的过程中在四川盆地一带遭到华南活动地块的强烈阻挡，使得应力在龙门山推覆构造带上高度积累，以至于沿映秀-北川断裂突然发生错动，产生8.0级强烈地震。
                </p>
                <div align="center" class="tupian">
                  <img
                    id="tsvg"
                    src="images/a1ec08fa513d269759eebf8fc2a9a5fb43166c22729c.jpg"
                  />
                  <br />
                  <span style="font-size: 12px;">汶川地震震中周边地质图</span>
                </div>
              </div>
              
      `
    },
    {
      id: "item1",
      title: "地震特征",
      html: `
              <h3><i class="fa fa-play" aria-hidden="true"></i> 地震强度</h3>
              <div class="content">
                <p>
                  根据中国地震局修订后的数据，5&middot;12汶川地震的里氏震级为8.0级；根据美国地质调查局修订后的数据，5&middot;12汶川地震的里氏震级为8.0级，矩震级为7.9级；根据欧洲地中海地震台网中心修订后的数据，5&middot;12汶川地震的矩震级为7.9级；日本气象厅测定5&middot;12汶川地震的面波震级是7.9级。
                </p>
                <p>
                  根据日本气象厅测定的数据，5&middot;12汶川地震的地震波确认共环绕了地球6圈。
                </p>
              </div>
              <h3><i class="fa fa-play" aria-hidden="true"></i> 地震持时</h3>
              <div class="content">
                <p>
                  汶川地震引起的地震动强度很大，波及范围很广，地震波传播至山西、河北、河南、北京等地区的自由场地时峰值加速度仍大于10厘米/秒&sup2;，远至福建、山东、江苏、上海等地区的多个台站仍记录到了加速度时程波形。在中国数字强震动观测网络的478个台站的加速度记录中，最大水平向峰值加速度为957.7厘米/秒&sup2;，最大竖向峰值加速度为948.1厘米/秒&sup2;；单分量峰值加速度大于90厘米/秒&sup2;的有127条，大于10厘米/秒&sup2;的有375条。
                </p>
              </div>
              <h3><i class="fa fa-play" aria-hidden="true"></i> 地震特点</h3>
              <div class="content">
                <p>汶川地震在地震过程和动力特征上表现出以下主要特征：</p>
                <p>1.震级高，震源浅。地震震级达8.0级，震源深度小于20千米。</p>
                <p>
                  2.具有面状震源的特点，破裂带长达近300千米。汶川地震的发生具有沿破裂带持续累进性破坏的特点。震源从映秀开始，沿映秀一北川断裂向北东经彭州、北川、江油至青川及其以北迅速破裂，并在沿途剪断若干由断裂的错列和转折形成的局部“锁固段”，释放大量能量，形成面状震源，所形成的地表破裂带长达近300千米，并激活带动了龙门山前山断裂——安县—灌县断裂形成近100千米长的地表破裂。
                </p>
                <p>
                  3.地震持续时间长。由于地震的面状震源和断裂的累进性破坏特点，从而导致此次地震持续时间长达80～120秒。长持时的震动是导致地震强烈破坏和触发大量地质灾害产生的重要原因。
                </p>
                <p>
                  4.地面地振动响应强烈。由于地震发生在地形条件极为复杂的中、高山地区，因此，地面地振动响应极为强烈，所记录到的地面运动峰值加速度局部地段达到1.5～2.0克。更为特别的是，该次地震产生的垂直向峰值加速度仅略小于水平向加速度，或是两者基本相当。
                </p>
                <p>
                  上述特征决定了汶川地震对建（构）筑物以及地质环境具有极大的破坏性和摧毁性，是导致灾区斜坡大量失稳，触发大量地质灾害的根本原因。
                </p>
              </div>
              
      `
    },
    {
      id: "item2",
      title: "地震过程",
      html: `
              <h3><i class="fa fa-play" aria-hidden="true"></i> 震中</h3>
              <div class="content">
                <p>
                  2008年5月12日14时28分4秒，四川省阿坝藏族羌族自治州汶川县境内发生里氏8.0级地震，震中位于四川省汶川县映秀镇西南方（地理坐标为北纬31.0度，东经103.4度），震源深度14千米，地震最大烈度11度，地震影响波及大半个中国，中国25个省（区、市）有明显震感。汶川特大地震的发震断裂位于青藏高原东缘龙门山断裂带。
                </p>
                <div align="center" class="tupian">
                  <img
                    id="tsvg"
                    src="images/9c16fdfaaf51f3de5f9b2a9d94eef01f3a29791a.jpg"
                  />
                  <br />
                  <span style="font-size: 12px;">5.12汶川地震震中</span>
                </div>
              </div>
              <h3><i class="fa fa-play" aria-hidden="true"></i> 余震</h3>
              <div class="content">
                <p>
                  截至2011年5月6日12时00分共记录到余震总数为86403个。其中6.0～6.9级地震8个，5.0～5.9级地震40个，4.0～4.9级地震274个，3.0～3.9级地震1375个。
                </p>
                <p>
                  2021年7月14日23时36分，四川阿坝州汶川县（北纬30.97度，东经103.37度）发生4.8级地震，震源深度15公里。
                </p>
                <div align="center" class="tupian">
                  <img
                    id="tsvg"
                    src="images/fd039245d688d43f8794bb1cea4cc51b0ef41ad58d99.jpg"
                  />
                  <br />
                  <span style="font-size: 12px;">余震分布图</span>
                </div>
              </div>
              
      `
    },
    {
      id: "item3",
      title: "地震影响",
      html: `
              <h3><i class="fa fa-play" aria-hidden="true"></i> 受灾范围</h3>
              <div class="content">
                <p>
                  汶川特大地震的发震断裂位于青藏高原东缘龙门山断裂带。地震影响范围涉及中国10个省（区、市）的417个县（市、区），其中四川、宁夏、陕西、甘肃及重庆5个省（区、市）受灾最为严重，共有4467个乡（镇）的48810个村庄，灾区总面积达50万平方千米。
                </p>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，汶川特大地震的地震灾区面积达50万平方千米，四川省是汶川特大地震的重灾区，其中四川受灾范围涉及除攀枝花市以外的20个市（州）、159个县（市、区）、3720个乡（镇）。四川灾区面积达到25.2万平方千米，重灾区12.5万平方千米，极重灾区达1.1万平方千米，占全省国土面积52%。
                </p>
                <p>
                  Ⅺ度区（11度）：为汶川特大地震烈度最高区域，面积约2419平方千米，以四川省汶川县映秀镇和北川县县城为两个中心呈长条状分布，其中映秀Ⅺ度区沿汶川—都江堰—彭州方向分布，长轴约66千米，短轴约20千米，北川Ⅺ度区沿安县—北川—平武方向分布，长轴约82千米，短轴约15千米
                  。
                </p>
                <p>
                  X度区（10度）：面积约3144平方千米，呈北东向狭长展布，长轴约224千米，短轴约28千米，东北端达青川县，西南端达汶川县。
                </p>
                <p>
                  Ⅸ度区（9度）：面积约为7738平方千米，呈北东向狭长展布，长轴约318千米，短轴约45千米，东北端达到甘肃省陇南市武都区和陕西省宁强县的交界地带，西南端达到四川省汶川县。
                </p>
                <p>
                  Ⅷ度区（8度）：面积约27786平方千米，呈北东向下规则椭圆形状展布，东南方向受地形影响有不规则衰减，长轴约413千米，短轴约115千米，西南端至四川省宝兴县与芦山县，东北端达到陕西省略阳县和宁强县。
                </p>
                <p>
                  Ⅶ度区（7度）：面积约84449平方千米，呈北东向不规则椭圆形状展布，东南向受地形影响有不规则衰减，西南端较东北端紧，长轴566千米，短轴约267千米，西南端至四川省天全县，东北端达到甘肃省两当县和陕西省凤县，最东部为陕西省南郑县，最西为四川省小金县，最北为甘肃省天水市麦积区，最南为四川省雅安市雨城区。
                </p>
                <p>
                  Ⅵ度区（6度）：面积约314906平方千米，呈北东向不均匀椭圆形展布，长轴约936千米，短轴约596千米，西南端为四川省九龙县、冕宁县和喜德县，东北端为甘肃省镇原县与庆阳市，最东部为陕西省镇安县，最西边为四川省道孚县，最北部达到宁夏回族自治区固原市，最南为四川省雷波县。
                </p>
              </div>
              <h3><i class="fa fa-play" aria-hidden="true"></i> 伤亡情况</h3>
              <div class="content">
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，截至2008年9月25日，5&middot;12汶川地震共计造成69227人遇难、17923人失踪、374643人不同程度受伤、1993.03万人失去住所，受灾总人口达4625.6万人。其中，四川省遇难68708人，失踪17923人。四川除攀枝花市和宜宾市之外的19个市（州）均有人员遇难，尤其以阿坝州、绵阳市、德阳市、成都市、广元市因灾伤亡严重，5个市（州）人员遇难均超过4000人，其中阿坝州、绵阳市、德阳市伤亡均超过万人。在震中汶川县映秀镇，5&middot;12汶川地震共造成5462人遇难，5&middot;12汶川地震中被毁的北川县城造成了大量人员伤亡，离震中映秀东北方直线距离250公里之外的青川县红光乡东河口村，5&middot;12汶川地震造成4个社区整体掩埋，780余人遇难。
                </p>
                <p>
                  5&middot;12汶川地震还造成人员受伤和被埋。截至2008年7月15日，四川省医疗卫生机构共收治灾区伤病员1336621人次，其中累计住院治疗90066人；共向20个省转运伤员10015人。截至2008年7月15日，四川灾区从废墟中共救出83988人。
                </p>
                <p>
                  截至2008年9月25日12时，四川汶川地震已确认69227人遇难，374643人受伤，失踪17923人。
                </p>
                <table log-set-param="table_view" data-sort="sortDisabled">
                  <caption>
                    截至2008年7月18日12时 各地区受灾人数统计
                  </caption>
                  <tbody>
                    <tr>
                      <th colspan="2" align="center">
                        <div class="para" label-module="para">地区</div>
                      </th>
                      <th align="center" width="143">
                        <div class="para" label-module="para">死亡</div>
                      </th>
                      <th align="center" width="161">
                        <div class="para" label-module="para">受伤</div>
                      </th>
                      <th align="center" width="124">
                        <div class="para" label-module="para">失踪</div>
                      </th>
                    </tr>
                    <tr>
                      <td rowspan="27" align="center">
                        <div class="para" label-module="para">四川省</div>
                      </td>
                      <td align="center" width="275" height="30">
                        <div class="para" label-module="para">汶川县</div>
                      </td>
                      <td align="center" width="143" height="30">
                        <div class="para" label-module="para">15941</div>
                      </td>
                      <td align="center" width="161" height="30">
                        <div class="para" label-module="para">34583</div>
                      </td>
                      <td align="center" width="124" height="30">
                        <div class="para" label-module="para">7930</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">北川县</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">8605</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">9693</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">绵竹市</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">11098</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">36468</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">298</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">都江堰市</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">3069</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">4388</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">广元市</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">4819</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">28241</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">125</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">青川县</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">4695</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">15453</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">124</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">成都市</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">4276</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">26413</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">什邡市</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">5891</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">31990</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">251</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">安县</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">1571</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">13476</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">平武县</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">1546</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">32145</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">彭州市</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">952</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">5770</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">茂县</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">3933</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">8183</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">336</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">江油市</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">394</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">10016</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">44</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275" height="30">
                        <div class="para" label-module="para">理县</div>
                      </td>
                      <td align="center" width="143" height="30">
                        <div class="para" label-module="para">103</div>
                      </td>
                      <td align="center" width="161" height="30">
                        <div class="para" label-module="para">1612</div>
                      </td>
                      <td align="center" width="124" height="30">
                        <div class="para" label-module="para">28</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">雅安</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">28</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">1351</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">眉山</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">10</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">315</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">资阳</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">20</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">633</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">巴中</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">10</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">258</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">南充</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">30</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">7632</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">遂宁</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">27</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">402</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">乐山</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">8</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">534</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">内江</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">7</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">225</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">
                          甘孜藏族自治州
                        </div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">9</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">23</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">广安</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">1</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">37</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">泸州</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">1</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">1</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">
                          凉山彝族自治州
                        </div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">3</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">4</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="275">
                        <div class="para" label-module="para">自贡</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">2</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">87</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center">
                        <div class="para" label-module="para">甘肃省</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">365</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">7865</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">11</div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center">
                        <div class="para" label-module="para">陕西省</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">121</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">2932</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center">
                        <div class="para" label-module="para">重庆市</div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">16</div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">637</div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">/</div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" align="center">
                        <div class="para" label-module="para">
                          <b>总计</b>
                        </div>
                      </td>
                      <td align="center" width="143">
                        <div class="para" label-module="para">
                          <b>67551</b>
                        </div>
                      </td>
                      <td align="center" width="161">
                        <div class="para" label-module="para">
                          <b>281367</b>
                        </div>
                      </td>
                      <td align="center" width="124">
                        <div class="para" label-module="para">
                          <b>9147</b>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="5" align="center">
                        <div class="para" label-module="para"> 数据来源：腾讯网<i>（注：“/”代表未知或无，因灾情复杂，统计渠道不一，汇总数据可能存在差异）</i>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3><i class="fa fa-play" aria-hidden="true"></i> 经济损失</h3>
              </div>
              <div class="content">
                <h4>▪ 综述</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，截至2008年9月，5&middot;12汶川地震造成直接经济损失8451.4亿元。其中四川的损失占到总损失的91.3%，甘肃占5.8%，陕西占2.9%，其他各省的损失之和不到20亿元。文物损失、档案损失和生态环境破坏等间接损失未入统计。其中建筑物和基础设施的损失很大，占到了总损失的七成。民房和城市居民住房的损失最大，占总损失的27.4%。基础设施包括道路、桥梁和其他城市基础设施的损失为其次，占21.9%，包括学校、医院在内的其他非住宅用房的损失为第三，占20.4%。
                </p>
                <h4>▪ 影响产业</h4>
                <p>
                  第一产业：根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，地震导致灾区农业遭受重大损失。大量的水渠、提灌站、梯田、蓄水池以及机耕道、沼气池等农业基础设施破坏严重。温室大棚倒塌5万多个，毁坏圈舍730多万平方米，损毁农业机械8万多台（套），毁坏农村户用沼气池60多万口。由于地震导致部分水利等基础设施损毁，后期灌溉用水严重缺乏，致使100万—150万亩水稻田被迫改种旱地作物。粮食作物受灾面积214.5万亩、损失32.6万吨；经济作物受灾面积257.2万亩，其中以茶叶、菌类等山区农产品损失尤重。林木损毁面积493万亩，林区道路损坏长度4859公里，林区房屋损毁面积311.1万平方米。四川全省畜牧业在地震中损失巨大，管理服务体系遭受重创。四川全省市（州）、县（市、区）、乡（镇）畜牧部门房屋受损99.64万平方米，倒塌44.90万平方米，经济损失13.01亿元；防疫物资、检疫（验）设施设备和冷链系统损失2.45亿元。畜牧生产能力受挫。四川全省损失畜禽3383万头（只），经济损失69.92亿元。其中，大牲畜30.67万头，经济损失11.09亿元；生猪340.33万头，经济损失44.21亿元；羊58.49万只，经济损失3.30亿元；家禽2554.76万只，经济损失6.96亿元；兔398.75万只，经济损失4.35亿元。全省畜禽圈舍倒塌2882.32平方米，经济损失101.29亿元。饲草料方面，四川全省因灾饲草料经济损失13.46亿元。四川全省受灾饲料生产企业厂房受损面积63.15万平方米，经济损失18.52亿元；设施设备经济损失2799万元，原材料、半成品及成品经济损失5221万元。草原生态方面，四川全省因灾造成天然草原植被破坏面积197.16万亩，退牧还草破坏面积21.44万亩，经济损失2.17亿元。渔业方面，毁坏鱼池30万亩，死亡或逃逸养殖成鱼、苗种8000多吨。农机方面，农机具损毁86986台（套）、提灌站损毁13070座、39.6万千瓦，机耕道损毁2.2万公里，农机库棚损毁面积27.2万平方米，办公用房损毁面积20.5万平方米。
                </p>
                <p>
                  第二产业：根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，四川全省16280户工矿企业受灾，厂房损毁面积4731万平方米。其中，中央在川企业房屋损毁面积1099.l万平方米，设备设施损毁36万台（套），产品和材料损失261亿元。主要受灾产业为以下四大产业：（1）装备制造业，直接经济损失47亿元，主要位于德阳市及绵阳市。（2）磷矿开采及化工产业，直接经济损失134亿元，主要位于德阳市。（3）电子信息产业，直接经济损失47亿元，主要位于绵阳市。（4）能源电力产业损失256.7万千瓦水力发电能力，主要位于阿坝州。矿山企业地面办公及厂房损毁面积373.5万平方米，设备设施受损35543台（套），井下设备设施受损20988台（套），井巷受损107.6万米。总部在四川省境内的中国东方电气集团公司、中国第二重型机械集团公司和攀枝花钢铁（集团）公司等3家中央企业，数十家中央企业驻四川的下属企业，都受到地震灾害影响。中国东方电气集团公司是受到地震灾害影响最严重的中央企业，受灾资产约占公司总资产的40%—50%。核心企业之一的东汽所在地——德阳绵竹市汉旺镇离震中映秀直线距离仅29公里，灾情最为严重。地震造成东汽主机一分厂、主机三分厂、焊接分厂、叶片分厂、船机分厂、金工分厂等东汽汉旺基地的单位及河坝生活区，以及东汽投资发展公司的铸造公司、装备公司、工模具公司、东汽技校等单位的建（构）筑物垮塌或严重损坏，80%的生产设施和机器设备严重受损。据统计，地震造成东汽约25万平方米的厂房、住房倒塌，形成危房30多万平方米，直接经济损失50亿元左右。位于四川省德阳绵竹市的中国化工集团公司所属清平磷矿，是汶川特大地震中人员伤亡和财产损失非常严重的企业。据不完全统计，该矿的直接经济损失4.78亿元，间接经济损失3.71亿元。地震发生后，绵竹到矿区15公里道路全部被山体滑坡堵塞，通信中断，矿区所有的房屋垮塌，多口矿井被埋，3000多名职工和家属被困。国家电网公司在岷江流域管理的8座水电站，除下庄电站外，映秀湾发电总厂的映秀湾、渔子溪和耿达电站，岷江水电股份公司的铜钟、草坡、沙牌和福堂电站全部停产。
                </p>
                <p>
                  第三产业：根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，在金融方面，5&middot;12汶川地震导致银行营业房和办公用房损毁面积181.5万平方米，系统网络及设备损失4.7亿元，现金损失38万元。根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，在旅游业方面，四川省内优良和良好的旅游资源主要集中分布于此次地震的6个重灾市（州）。地震对区域内的旅游景区、旅游设施造成了巨大的破坏。景区受损482个，宾馆饭店损毁3708个，办公用房损毁面积13万平方米，车辆损毁66辆；直接损失466亿元，相当于2007年四川全省旅游收入的40%。根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，商贸物流、粮食、供销、邮政系统因灾损失也很严重。四川全省商务系统有51429个网点和服务点受损，营业房损毁面积1110.5万平方米，商品损失67.8亿元，现金损失2804万元。粮食系统仓库损坏19712个、罐容损坏701.9万吨，粮油损失7万吨，办公室损坏面积50.9万平方米。供销系统房屋损毁面积293.5万平方米，商品损失2.8亿元，现金损失115万元。邮政局（所）损毁面积47.6万平方米，职工住房损毁面积31.2万平方米，汽车损毁37辆，其他设备设施损毁3251件（台），损失邮件赔偿金额221万元，损失现金212万元。
                </p>
                <h4>▪ 城镇损毁</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，5&middot;12汶川地震共造成四川省城镇居民住房倒塌1933万平方米，严重损毁6876.6万平方米，受影响居住人口97.8万户285万人。农村居民房屋倒塌635.06万间、严重损毁722.19万间。地震还使灾区城乡居民室内外财产损失惨重，据调查估算损失高达344.9亿元。
                </p>
                <p>
                  5&middot;12汶川地震导致北川县城变为废墟，导致青川县城失去了承载人口的功能。同时，地震还导致汶川映秀镇、绵竹汉旺镇等城镇房屋建筑全部毁坏，都江堰市三分之一的房屋毁坏、三分之一的房屋需要加固维修。
                </p>
                <p>
                  处于地震烈度Ⅺ度区的汶川县水磨镇、漩口镇、白花乡、映秀镇、银杏乡、桃关村，都江堰市的虹口乡，彭州市的小鱼洞镇、龙门山镇，北川县的县城、陈家坝乡，平武县的平通镇、南坝镇等完全被损毁。
                </p>
                <p>
                  处于地震烈度Ⅹ度区的汶川县三江、耿达、草坡、下索桥、绵篪、玉龙，茂县的光明、富顺、土门、东兴，都江堰市的青城后山、紫坪铺镇，彭州市的通济、白鹿等城镇也完全被毁
                  。
                </p>
                <p>
                  处于地震烈度Ⅸ度区的汶川县卧龙、七盘沟、威州、雁门、克枯、下庄、龙溪，茂县的南新、凤仪、渭门、沟口、永和、黑虎、飞虹，理县的桃坪，松潘的白羊，崇州市的文井江、鸡冠山，都江堰市的灌口、向峨、青城山、泰安，彭州市的磁峰等城镇建筑大部分被毁。
                </p>
                <p>
                  另据调查统计，四川全省有1595个社区居委会房屋倒塌、受损（其中重灾区1065个），占四川居委会数量的30.20%。这次地震的极重灾区主要分布于龙门山区的广大农村，四川全省有12939个村委会房屋倒塌、受损（其中重灾9310个），占四川全省村委员会总数的30.98%。
                </p>
                <h4>▪ 交通设施损毁</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，5&middot;12汶川地震及其引发的滑坡、崩塌等次生灾害，使四川灾区交通基础设施损毁十分严重。通往震中汶川的317国道、213国道被严重破坏全部中断，特别是即将建成的都汶高速公路损坏最为严重。此外，通往茂县、北川县、绵竹市、青川县、平武县等重灾县（市）以及254个乡镇公路交通一度完全中断。四川全省损毁高速公路299公里，成灌高速、成绵高速、成雅高速、成温高速等7条高速公路约145公里路面路基、181座桥梁、10座隧道被破坏。损毁干线公路3026公里，国道108线、212线等16条国道、省道约2723公里路基路面、577座桥梁、12座隧道遭受不同程度破坏。损毁农村公路18800公里、桥梁563座、隧道42座，损毁县级以上客运站143个、农村客运站543个，码头损毁200个，道班房损毁面积46.9万平方米，养护设施损毁116台（套），办公用房损毁面积49.9万平方米。地震造成四川省境内宝成线、成昆线、成渝线、达成线等主要铁路干线，成汶、德天、广岳三条支线等都不同程度受损。成都铁路系统受损线路2572公里、桥梁隧道377座、路基669公里、涵渠59座、信号设备站58个、房屋建筑面积331.4万平方米。共计造成41台（辆）机车车辆报废，32公里线路的钢轨或轨枕损坏、变形，61座桥梁、40座隧道不同程度受损，66个站的信号设备损坏，部分区段通信设备损坏，61公里接触网设备损坏，85.2万平方米房屋倒塌或受损，塌方落石58650立方米。
                </p>
                <h4>▪ 城建系统损毁</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，5&middot;12汶川地震使城市供排水管道损毁7006公里，城市燃气管道损毁3275公里，市政道路损毁3112公里，城市桥梁损毁1040座，生活垃圾收集处理设施损毁2609座。四川全省541个水厂、2630.9公里排水管道、1226座市政桥梁、87561盏路灯、470处公交设施、45处污水处理设施、1620处垃圾收集处理设施、323处其他市政设施在地震中遭到不同程度的损坏。
                </p>
                <h4>▪ 水库和水利设施（含地方电力）损毁</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，5&middot;12汶川地震使水库工程受损1808座。因大坝裂缝、坝体滑坡、溢洪道毁坏、洪水洞垮塌、防浪墙断裂、坝坡塌陷等。其中，大型水库8座、中型水库58座、小型水库142座；有溃坝险情的69座，存在高危险情的310座。堤防工程损毁728公里，259884处水源设施震毁，供水工程受损管道长度3万公里，影响人口575万人，灌溉工程受损12.3万座、渠道长度3.9万公里，52791平方米水文观测站、236台水文监测设备、2134公里农村水电设施不同程度受损，倒伏、断裂电杆11419根，其他水利设施（涵闸等）受损105040处。水土保持设施蓄水池受损20622口、坡面水系4017公里、水产养殖受灾面积49.9万亩、成鱼及鱼种死亡3.1万吨，办公及管理用房受损面积101.7万平方米，管理设施受损8651台（套）。
                </p>
                <h4>▪ 电力系统（含地方电力）损毁</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，5&middot;12汶川地震使国家电网35千伏及以上变电站停运247座，10千伏及以上输电线路停运1643条。四川电网35千伏及以上变电站停运173座，其中全毁17座；10千伏及以上输电线路停运2769条。农村水电站损毁470座，配电设备损毁2811台，电网断电3.2万公里。6个重灾市（州）有361座电站受到不同程度损毁，直接经济损失64.2亿元。四川全省共有36家地方电力供电企业受灾，10千伏以上线路停运线路408条，倒杆21540根，断线68559公里，损毁低压线路14253公里，配电设备3675台，直接经济损失18.61亿元。6个重灾市（州）有8个电力公司受灾，直接经济损失16.37亿元。
                </p>
                <h4>▪ 通信系统损毁</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，5&middot;12汶川地震造成通信基站破坏、通信设备损坏，设备折断或倾斜、光缆拉野。据四川省通信管理局统计，地震致使通信领域的重灾区8个县辖下的109个乡镇通信中断。四川全省地震灾区共造成2552套数据设备、2564套交换设备、3625套传输设备、118755根通信路杆倒断，27307皮长公里通信线路、15731套基站设备、5321套电源设备、4101台发电油机、7337组蓄电池、3460座基站铁塔以及314001套其他设备不同程度受损，损毁3490间房屋和166辆汽车。四川全省通信系统业务用房损毁面积116万平方米，移动通信基站损毁2096座，小灵通基站损毁1.2万座，光缆损毁1.7万皮长公里，电缆损毁6277皮长公里，交换机及接入设备损毁5548台，传输设备损毁3623台。
                </p>
                <p></p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3><i class="fa fa-play" aria-hidden="true"></i> 环境破坏</h3>
              </div>
              <div class="content">
                <p></p>
                <h4>▪ 山河改貌</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，5&middot;12汶川地震触发大面积的滑坡、崩塌、堰塞湖、泥石流、地裂缝、地震陷坑和砂土液化。在地震瞬间，地动山摇，地表破裂现场造成公路或路面错段，或横向隆起，或纵向倾斜；地裂带沿线房屋或毁坏，或地基隆起抬高。位于断裂带上的房屋严重破坏、倾斜以至全部倒塌，路面倾斜大于60度，原始地形严重改观。地震断裂在汶川—北川一带破裂至地表，断裂挤压错动形成许多断层陡坎。
                </p>
                <h4>▪ 地貌改变</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，5&middot;12汶川地震使汶川县、理县、茂县、彭州、绵竹、北川县、安县、平武县等地出现大量山崩滑坡现象。一些山体整体滑入河谷，阻塞河道。唐家山滑入湔江河道形成唐家山堰塞湖。岷江干流河谷沿岸茂县至漩口段目视范围内约70%出现山体滑坡，岷江支流杂谷脑河汶川至理县薛城段河谷沿岸约30%出现山体滑坡。滑坡体毁坏、掩埋村庄，滚石砸毁房屋、行驶车辆，造成行人死伤，毁坏公路桥涵，堵塞交通等。地震还导致地表喷砂冒水，甚至出现地震陷坑。
                </p>
                <h4>▪ 土地破坏</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，5&middot;12汶川地震带来的滑坡、泥石流、崩塌等地质灾害，对土地资源的破坏严重，导致大量土地灭失。根据国家减灾委、科学技术部抗震救灾专家组遥感监测，地震及其诱发的滑坡、崩塌、泥石流等灾害导致地表覆盖物大量被破坏。汶川县、绵竹市、安县、彭州市、北川县、什邡市、都江堰市、平武县、茂县、青川县、江油市等11个县（市）区域地表覆盖物破坏严重。11个县（市）由于地震导致的滑坡、崩塌、泥石流等破坏地表覆盖总面积达到77311公顷，占11个县（市）国土面积的2.69%。其中，以汶川县、绵竹市、安县和什邡市地表覆盖受破坏最为严重，分别占4个县（市）国土面积的6.85%、8.37%、5.96%和7.15%。地表覆盖遭到破坏，导致原有的林地、耕地、草地等土地受损或灭失，生态系统遭到破坏，进而影响生态功能和生物多样性的保护。
                </p>
                <h4>▪ 农民失地</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，5&middot;12汶川地震造成四川灾区部分农民失去宅基地12307亩，涉及4.5万农户、15.9万人；使用耕地受损167.8万亩，耕地灭失17.6万亩，其中有约1.2万户、4.1万人的5.6万亩耕地全部灭失。
                </p>
                <h4>▪ 林地被毁</h4>
                <p>
                  根据四川人民出版社2017年出版的《汶川特大地震四川抗震救灾志&middot;总述大事记》，成都市、德阳市、绵阳市、广元市、雅安市、阿坝州6个地震重灾市（州）损毁林地491.6万亩，其中生态公益林361.53万亩，木质工业原料林56.84万亩，经济竹林11.4万亩，核桃等经济林61.83万亩。由于森林遭到大面积的毁灭，四川全省森林覆盖率由30.7%下降为30.2%，下降了0.5个百分点。其中45个林业重灾县（市、区），森林覆盖率由震前44.51%下降为42.64%，下降了1.87个百分点。主震区所处的龙门山区，是四川省森林资源最为丰富的地区，该区域林地占四川全省10.4%，森林蓄积量占四川全省的9.5%，森林覆盖率比四川全省高13个百分点，林地占幅员的比重高出四川全省平均水平17个百分点。由于大面积山体滑坡、塌方，林木大量倒伏、断折或被埋，林地垮塌、被淹甚至面积缩减，地震之前灾区多年实施的退耕还林、天然林保护的成果遭到严重破坏，初步统计林地损毁达380多万亩。绵阳市森林覆盖率直接下降了2.95个百分点。阿坝州林地损毁247.11万亩，其中天保工程造林78.9万亩，退耕还林工程造林30.61万亩，已郁闭成林且有蓄积的林地137.6万亩。另外，地震中有13处国家、省自然保护区受到不同程度破坏，占自然保护区总面积的55%。珍稀野生动物栖息地受到破坏，严重威胁着珍稀野生动植物的生存。
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 社会损失
                </h3>
              </div>
              <div class="content">
                <p></p>
                <h4>▪ 学校受灾</h4>
                <p>
                  地震造成四川全省13768所（个）学校（含教学点和附设班）受灾，涉及在校生930万人；倒塌危房校舍面积1151万平方米，受损校舍面积2423万平方米；造成校舍损失262.49亿元，教学仪器设备及图书资料损失13.74亿元，体育场地损失3.94亿元，附属设施损失23.36亿元。其中，成都市受损学校1086所，德阳市780所，绵阳市1398所（未含民办学校），广元市492所，阿坝州763所。
                </p>
                <h4>▪ 卫生服务机构受灾</h4>
                <p>
                  四川全省卫生系统卫生服务机构受损11386个，占四川全省总数的16%。房屋损毁面积708.6万平方米，设备损毁6.8万台，药品损失3.5亿元。重灾市（州）部分县农村三级卫生服务网的房屋几乎全部倒塌或成危房，基本医疗服务能力损失殆尽。其中成都市有25个镇卫生所、154个村卫生站整体损毁，德阳市受损医疗机构976个，绵阳市3322个，广元市2495个，阿坝州977个。
                </p>
                <h4>▪ 人口和计生系统服务机构受灾</h4>
                <p>
                  四川全省人口和计生系统服务机构受损9034个，房屋倒塌面积12.4万平方米，危房面积43.6万平方米，设备损毁3.6万件，药品药具损毁1226万元。
                </p>
                <h4>▪ 民政事业单位（含社会福利机构）受灾</h4>
                <p>
                  四川全省民政系统各类民政事业单位（含社会福利机构）受损1598个，房屋受损面积35.2万平方米，设备损失2.2亿元。约44家福利院和养老院倒塌，6个重灾市（州）的孤儿院、社会福利院和精神病院受到不同程度的损毁。
                </p>
                <h4>▪ 广播电视系统台站受灾</h4>
                <p>
                  四川全省广播电视系统台站受损1220个，办公用房和机房损坏面积50.5万平方米，光缆线路损坏6.7万公里，专业设备损坏17.8万台（件、套）。
                </p>
                <h4>▪ 体育系统公共比赛场馆受灾</h4>
                <p>
                  四川全省体育系统公共比赛场馆（有观众席）受损面积92.5万平方米，运动员训练场馆损坏面积24.1万平方米，其他体育用房损坏面积12.6万平方米，全民健身路径工程损坏587套，农民体育健身工程损坏266个。
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 文化损失
                </h3>
              </div>
              <div class="content">
                <p></p>
                <h4>▪ 综述</h4>
                <p>
                  四川地震重灾区大多数是文化资源富集、文化生态脆弱、文化基础设施薄弱、交通极其不便的民族地区、贫困山区和革命老区。灾区文化产业受损严重，涉及演出展览、文化娱乐、艺术教育培训、音像、艺术品、网络文化、对外文化贸易等多个行业。部分重点文化企业和项目、文化基础设施、文化市场服务场所遭到严重破坏，影响了文化产品生产、服务、消费和投资。文化市场、文化产业机构和设施受损3990个，房屋受损面积55.8万平方米，设备受损89331台，公共文化机构和设施受损9598个，房屋受损145万平方米，设备受损60203台，图书受损346.9万册。文物本体损毁276件，管理用房损毁面积4.6万平方米，防护设施损失9亿元。
                </p>
                <h4>▪ 文化场馆受灾</h4>
                <p>
                  四川灾区的文化局、文化馆、图书馆、影剧院、乡镇综合文化站、文化信息资源共享工程基层服务点等基础设施均受到严重损毁。其中，有4个县文化局行政大楼、5个县文化站、4个县图书馆、4个影剧院（剧场）、242个乡镇综合文化站、11个文化信息资源共享工程基层服务点整体垮塌，面积7.8万平方米。北川县、汶川县、青川县、茂县等县的文化设施在地震中全部被夷为平地。
                </p>
                <h4>▪ 文化遗产受灾</h4>
                <p>
                  在历史文化遗产方面，地震灾害给四川省文化遗产造成极大损坏。重灾区的成都市、德阳市、绵阳市、阿坝州的文物建筑、博物馆垮塌，文物损毁非常严重，文物损失惨重。四川全省有83处全国重点文物保护单位、174处省级文物保护单位和814处市、县级文物保护单位以及数量难以统计的文物保护点受到不同程度损毁；65处博物馆、文管所文物库房和办公、管理用房遭受不同程度的破坏和损毁；大量馆藏文物受损。
                </p>
                <h4>▪ 文化产业和文化市场受灾</h4>
                <p>
                  四川全省文化产业和文化市场受到地震灾害的严重影响。都江堰景区、三星堆文化产业园、成都锦里、建川博物馆聚落、九寨沟演艺群、自贡彩灯文化产业园等国家文化产业示范基地、灵岩山文化旅游园区、昭化古城三国文化产业园区等150余家重点文化产业单位受到不同程度的破坏，绵竹年画村、什邡惊奇欢乐谷等完全损毁。有1.1万个文化经营场所受到不同程度的破坏，其中因灾大面积停业的有13个县，经营场所达到1734家。有27个县受到不同程度的影响，有590家经营场所不能正常营业。文化产业和文化市场因灾经济损失达到69.5亿元。
                </p>
              </div>
              
      `
    },
    {
      id: "item4",
      title: "次生灾害",
      html: `
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 综述
                </h3>
              </div>
              <div class="content">
                <p>
                  汶川特大地震震中区域属突发性地震灾害高发区，强烈地震及频繁余震造成山体岩层破裂，地表破碎，植被遭到严重破坏，加之暴雨频繁，引发余震、山体滑坡、崩塌、泥石流等众多次生灾害，地震产生大量新的地质灾害隐患点，给灾后恢复增加了困难。
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 地质灾害
                </h3>
              </div>
              <div class="content">
                <p>
                  地震极重灾区阿坝州，地震引发滑坡、崩塌和泥石流等各类地质灾害2.1万处，涉及人民群众生命财产安全的重大地质灾害隐患2265处。岷江干流河谷沿岸茂县至漩口段目视范围内约70%的山体滑坡，岷江支流杂谷脑河汶川至理县薛城段河谷沿岸约30%的山体滑坡，重大地质灾害2172处，其中滑坡910处、崩塌1257处。
                </p>
                <div align="center" class="tupian">
                  <img
                    id="tsvg"
                    src="images/d4628535e5dde71190efaf1830bdd91b9d16fcfacb98.jpg"
                  />
                  <br />
                  <span style="font-size: 12px;">余震分布图</span>
                </div>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 堰塞湖
                </h3>
              </div>
              <div class="content">
                <p>
                  地震形成堰塞湖104座。最大堰塞湖是位于涪江支流湔江河道、分布于北川县城曲山镇上游的唐家山堰塞湖。该湖是由于唐家山受地震影响，滑入湔江河道阻塞河道而形成，其堰塞体顺河长达803米，横河宽612米，高约百米。震后堰塞湖的水位以每天3米的速度上升，每天入库水量达720万立方米，随时都可能倾泻而下，严重威胁着下游四川中部的工业城市绵阳市和遂宁市。
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 气象灾害
                </h3>
              </div>
              <div class="content">
                <p>
                  地震诱发的气象灾害对救灾和工农业生产造成极大影响，从2008年5月12日到14日，极重灾区汶川县天气一直处于阴间多云有阵雨或雷雨天气，增大了群众自救和救灾难度，同时也导致在道路等生命线阻断情况下，利用飞机参与救援的难度。极重灾区的其他地区也面临相似的天气现象。
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3 id="item9" class="item">
                  <i class="fa fa-play" aria-hidden="true"></i> 水库震损
                </h3>
              </div>
              <div class="content">
                <p>
                  地震还造成震损水库出险系数倍增。根据国家减灾委报告，中国因汶川地震出险水库2473座，其中四川1803座，震损水库出险形式多种多样。在四川出险水库中，坝体产生裂缝的水库占66.3%，坝体出现渗漏的水库占34.4%，大坝坝坡滑塌的水库占12.4%，启闭设备变形的水库占8.1%，其他出险形式的水库占16.1%。
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 提防震损
                </h3>
              </div>
              <div class="content">
                <p>
                  四川全省震损堤防共500段，受损长度723公里，97%为三级以下的堤防，约占四川全省当年实有堤防长度的14.5%。堤防出现险情的类型也是多种多样，堤防出现裂缝的317处，脱、滑坡165处，沉陷193处，管涌3处，其他84处，一些堤防出现多种险情。全部堤防险情中，出现重大险情的50段，占10%，长度201公里，占总长度的27.84%；出现较重险情的199段，占堤防总数的39.8%，长度201公里，占长度的27.84%；出现一般险情的251处，占震损堤防总数的50.2%，长度321公里，占总长度的44.4%。
                </p>
              </div>
              
      `
    },
    {
      id: "item5",
      title: "地震处置",
      html: `
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 救援情况
                </h3>
              </div>
              <div class="content">
                <h4>▪ 综述</h4>
                <p>
                  5&middot;12汶川地震发生后，在中共中央、国务院、中央军委的领导下，在国务院抗震救灾总指挥部的直接领导下，在全国党政军民的大力支持下，四川省委、省政府率领8600万人民沉着应对，开展了1949年中华人民共和国成立以来抢险救援难度最大的一次地震救援抢险。
                </p>
                <p>
                  5&middot;12汶川地震发生后，中共中央当即把抗震救灾确定为全党全国最重要最紧迫的任务。时任中共中央总书记、中华人民共和国主席、中央军委主席胡锦涛在地震发生后，连续主持政治局常委会议和政治局会议，全面部署抗震救灾工作，并亲赴灾区指导抗震救灾。国务院成立抗震救灾总指挥部和四川前方指挥部，周密组织、科学调度，形成上下贯通、军地协调、全民动员、区域协作的工作机制。时任中共中央政治局常委、国务院总理、党组书记温家宝在地震发生后当即赶赴四川灾区一线指导抗震救灾。在总指挥部的统一部署下，各有关部门紧急拨付救灾资金，紧急组织各方救援力量驰援灾区，紧急调集大批救灾物资运往灾区。中共中央、国务院的其他领导同志也先后赶赴灾区，对抗震救灾给予指导和协调。
                </p>
                <p>
                  四川各级党委、政府认真贯彻中央部署，担当工作主体责任，地方各级党委、政府紧急动员，带领干部群众化悲痛为力量，从废墟上勇敢站立起来，坚强、依法、科学应对地震巨灾，奋力夺取抗震救灾伟大胜利。地震发生后，四川省委、省政府召开碰头会紧急研究部署抗震救灾工作，立即把抗震救灾确定为全省最重要最紧迫的任务，省政府迅速启动应急Ⅰ级响应，及时召开新闻发布会向社会通报震情灾情，省领导随即分别带队赶赴一线组织指挥。省委、省政府立即成立四川省“5&middot;12”抗震救灾指挥部，统一领导、统一指挥。震后不到3小时，四川全省的省、市、县、乡抗震救灾组织指挥体系基本形成。
                </p>
                <p>
                  四川省指挥部迅速组织协调各方救援力量赶赴灾区，紧急组织地方部队、公安民警、公安消防近4万人就地就近投入救灾；迅速组织四川全省多支地震救援队、矿山救援队、医疗救援队急驰灾区。四川省委、省人大、省政府、省政协班子的领导全部参加指挥部相关工作，四川省指挥部建立每天两次的会商制度，组织协调和安排部署各项具体工作；四川省指挥部实行应急体制下的厅局工作机制，授权指挥部领导按照分工直接发布指令、调度职能部门；四川省指挥部与市（州）指挥部建立点对点快速处置机制，直接协调解决紧急救援事项和特殊困难，确保指挥体系高效运转。四川省指挥部先后邀请了上百位在川各方专家召开各方面的救灾分析会、咨询会，咨询研讨抢险救灾良策；支持人大代表和政协委员履职尽责，积极为抗震救灾献计献策；紧急组织开展涉灾法律问题调研，开展应急地方立法，出台有关政策文件。四川省指挥部及时作出一系列重大决策，如在震后立即实行交通管制和交通保障，集中力量打通救援生命线，政府补贴经费帮助受灾农户搭建简易过渡房，尽快恢复受灾居民家庭生活，实行“就地、就近、分散安置”原则安置受灾群众等。随着各方救援力量和资源进入四川，统筹整合各方力量、高效利用救灾资源极为重要，四川省指挥部积极协助国务院抗震救灾总指挥部和四川前方指挥部，合理部署救援部队和专业力量，接应国外和港澳台地区的救援队参与抢险救人。采取军地协调、以地方为主，军种协调、以驻军为主的办法，形成军地协同救灾合力，最大化地发挥各方救援力量作用。积极协调四川省内省外、前方后方物资支援，做好物资筹集、管理和调拨，保障应急通信联络，筹措安排救灾运力，为各方救援队伍提供有力后勤保障。灾区各市（州）、县（市、区）、乡（镇）党委政府也依法全面履行属地应急责任，依托内外救援力量和资源，实施各项决策，开展工作，确保抢险救灾工作最短时间达到有序状态。经历了自救互救、重点搜救、进村入户全面搜救阶段。
                </p>
                <h4>
                  ▪ 中共中央、国务院和四川省委、省政府以及军队紧急部署抗震救灾
                </h4>
                <p>
                  2008年5月12日16时44分左右，时任中共中央政治局常委、国务院总理、党组书记温家宝从北京南苑机场乘专机赶赴四川灾区。
                </p>
                <p>
                  根据中共中央的决定，国务院迅速成立抗震救灾总指挥部，由时任总理温家宝任总指挥，时任中共中央政治局常委、国务院副总理、党组副书记李克强和时任中共中央政治局委员、国务院副总理回良玉任副总指挥，下设由有关部门、军队、武警部队和地方党委、政府主要负责人参加的抢险救灾组、群众生活组、地震监测组、卫生防疫组、宣传组、生产恢复组、基础设施保护组（后改为“基础设施保障和灾后重建组”）、社会治安组等8个抗震救灾工作组（后增设水利组）。根据四川抗震救灾实际，国务院在四川专门设立国务院抗震救灾总指挥部前方指挥部，统筹协调四川抗震救灾工作。
                </p>
                <p>
                  2008年5月12日下午，中共四川省委办公厅、四川省人民政府办公厅下发《关于切实做好抗震救灾工作的紧急通知》。四川省委书记、省人大常委会主任刘奇葆作出指示，要求把抗震救灾作为当前的头等大事和首要政治任务，全力投入抗震救灾工作，全力保护人民群众生命财产安全，全力维护社会稳定。
                </p>
                <p>
                  2008年5月12日至11月19日，在抢险救灾的关键阶段，四川省委多次召开省委常委（扩大）会议、省委全委会议，省委、省政府召开电视电话会议、抗震救灾工作汇报会议、专题会议和工作会议等，对全省抢险救援、医疗防疫过渡安置的组织指挥，作出一系列重大部署。在四川省委、省政府的统一组织指挥下，四川全省各级党政机关，人民团体，各类企事业单位，广大干部群众，公安干警，解放军指战员，武警官兵及民兵预备役人员，医疗卫生、新闻、科技工作者，工程建设者，志愿者，各民主党派、工商联、无党派人士迅速投入抗震救灾，展开抗震救灾斗争。
                </p>
                <p>
                  5&middot;12汶川地震一发生，成都军区立即作出快速反应，启动抢险救灾应急机制，成立抗震救灾指挥部，把抗震救灾、抢救人民群众的生命财产当作成都军区部队第一任务，迅速出动兵力，全力开展救援工作。正在云南的时任成都军区司令员李世明、时任政治委员张海阳当即指示成都军区及成都军区司令部、政治部、联勤部、装备部（以下简称“四大部”）等机关立即启动抢险救灾应急指挥机制，全面展开抗震救灾组织指挥工作。成都军区副司令员李作成立即出发到灾区一线开设成都军区抗震救灾前线指挥所，组织指挥抢险救灾；迅速查明震中和相关地区灾情，并及时向中央军委、军区总部报告；命令驻四川灾区的成都军区部队和民兵预备役人员立即以最快速度赶赴地震灾区，不惜一切代价全力抢险救灾。
                </p>
                <p>
                  根据中央军委的命令，2008年5月13日成都军区抗震救灾联合指挥所成立，5月15日成立成都军区抗震救灾联合指挥部。成都军区联指将在四川境内的部队抗震救灾区域划分为5个责任区，每个责任区设立指挥所，形成了中央军委领导下的军队抗震救灾指挥组—成都军区抗震救灾联合指挥部—抗震救灾责任区指挥所三级指挥体系，统一协调指挥军队和武警抢险救灾
                  。
                </p>
                <p>
                  四川省军区地震发生后立即启动应急机制，召开抗震救灾紧急会议部署抗震救灾工作。电令成都警备区，雅安、绵阳、德阳军分区，四川预高师，乐山预旅，达州预旅和雅安预团等单位官兵、民兵预备役人员最短时间内投入救灾。
                </p>
                <h4>▪ 地震灾区县（市、区）党委、政府积极组织指挥抢险救援</h4>
                <p>
                  2008年5月12日14时35分，震中汶川县委、县政府紧急启动了一级应急预案，成立汶川县抗震救灾指挥部，组成抢险救援、医疗救护、道路抢险、维护稳定、宣传信息、后勤保障等8个工作组，分赴各个领域开展抗震救灾工作。震中汶川县映秀镇，地震后交通通信与外界完全断绝，正在映秀检查工作的州、县领导与映秀镇20余名幸存党员干部迅速成立临时救援指挥部，组成疏散安抚、抢险救援、医疗救治、生活保障、秩序维护和死亡调查6个小组，开展抗震救灾工作。地震中县城房屋大部分被毁的北川县，党政领导班子幸存人员于5月12日14时35分在县委大院空地上成立抗震救灾临时指挥部，组织群众开展自救和向安全地带紧急转移。
                </p>
                <h4>▪ 各种救援力量疾进灾区</h4>
                <p>
                  5&middot;12汶川地震发生后，在中共中央、国务院、中央军委统一调度下，各路救援大军迅速赶赴四川灾区抢险救灾。在各种救援力量疾进灾区中，解放军、武警、消防官兵担当重任，通过各种交通工具千里驰骋支援灾区救援。航空、铁道、公路等各级交通运输部门紧急调集飞机、机车、车辆，快速编组专列，加强铁路、公路交通保障，实施空中和地面立体输送，将各方救援力量和重要救灾物资、救灾装备输送到灾区。各路救援大军通过空中投送、铁路输送、公路摩托化开进并举的方式疾进灾区。12.3万名解放军官兵，2.3万名武警部队官兵，昼夜兼程赶赴灾区。在川参加抢险救援的省外救援力量在震后两天到达全部受灾县（市、区），3天到达全部重灾乡（镇），7天到达所有受灾村，通过开展“进村入户搜救行动”，从废墟中抢救出生还者83988人，紧急转移受灾群众1500多万人，救援转移受困游客5.5万人，有效地降低了死亡率、伤亡率。
                </p>
                <p>
                  2008年5月12日14时49分，成都军区派出查看灾情的4架直升机起飞，随后紧急出动6100名官兵开赴灾区。16时，3000余名武警官兵到达都江堰市实施救援；17时20分，成都军区空军11旅106营100余名官兵赶到什邡市；成空雷达39团到达理县。18时，武警成都、德阳市支队790名官兵到达绵竹、什邡。到5月12日深夜，到达灾区一线的各路救援队伍已达两万余人。13日，11420名官兵紧急空运到达成都附近。当天23时15分，200名武警官兵以强行军方式突进汶川县城。14日11时47分，15名空降兵空降茂县，传回茂县灾区第一手信息。当天，军地救援队伍到达所有受灾县。在震后第三天，即5月15日24时前，各路救援队伍到达所有受灾乡镇；第七天，到达全部6个重灾市（州）的所有3669个受灾村。
                </p>
                <p>
                  中国15个省（自治区、直辖市）的7.5万名民兵预备役部队人员，2.5万名消防官兵、特警、公安民警等抢险救援队伍，千里驰援，奋力救灾，维护灾区治安秩序。
                  各级党政部门、企事业单位、社会各界以及港、澳、台同胞和海外侨胞，迅速组织各种形式的救援力量赶赴灾区。20余万名志愿者自发从中国各地赶赴地震灾区参与救援，国际机构、外国政府和国际友好人士积极派遣救援队和医疗队，赶赴地震灾区实施救助。
                </p>
                <p>
                  5&middot;12汶川地震使四川各受灾地区山崩地裂、道路塌陷、桥梁断裂，各救援力量在挺进灾区的过程中，遇到公路堵塞无法疏通时，毫不犹豫弃车徒步翻山越岭，跨急流、涉险滩，强行军奔赴救援现场。
                </p>
                <p>
                  至2008年5月12日24时，成都军区紧急出动现役部队官兵6300余人。5月13日零时以后，成都军区驻灾区附近部队继续出动，根据对灾情的进一步掌握，增加抽调77100部队野外驻训部队；根据抢修道路、防疫消毒的需要，出动工程兵、防化兵等小兵种部队；根据全力抗震救灾和奉命统一指挥在四川地区抗震救灾的解放军、武警部队官兵和民兵预备役人员的要求，全面动用指挥力量和保障力量。5月13日8时，中央军委向中国人民解放军成都军区、济南军区和空军、总后勤部下达《关于参加抗震救灾的命令》。5月14日19时40分，中央军委又向成都、济南军区和海军、空军下达《增派抗震救灾部队命令》。成都军区根据中央军委、总部确定的边行动边报告原则，在中央军委命令下达之前，提前向部队进行明确。5月12日22时14分，成都军区下达《出动部队赴四川抗震救灾的命令》，要求77283部队人员轻装，携带土木工具、野营器材和炊具；77208部队地震灾害救援队携带必要装备，采取摩托化机动和铁路输送相结合的方式，于5月13日3时从昆明启运，赴四川地区执行抗震救灾任务。中央军委决定第二次向四川灾区增兵后，成都军区首先电话下达命令，接着于5月13日21时49分下达《增派77200部队执行抗震救灾任务命令》，要求77223、77225、77226部队出动6000人赶赴四川北川县、绵竹市、安县、江油市4个地区抗震救灾。77200部队为提前做好装载、输送准备，于5月14日20时38分向所属77223、77225、77226部队下发通知。在整个抗震救灾期间，成都军区部队共出动兵力52645人、各种车辆1496辆、大型机械83台、直升机4架，还有各型飞机1102架次，组织751名医务人员组成40支应急救护医疗队，主要在都江堰市、彭州市、绵阳市、什邡市、绵竹市、阿坝州等极重灾区和部队驻地附近救援。
                </p>
                <p>
                  2008年5月13日3时52分，济南军区抗震救灾摩托化机动部队奉命出发。部队共编为14个行军梯队，动用车辆装备1500多台（件）、输送兵力1.16万人、携运物资1500余吨，昼夜兼程，跨越秦岭，向灾区紧急进发；4时30分，济南军区抗震救灾先遣队编为2个梯队向灾区挺进。第一梯队于13日11时到达彭州；第二梯队于14日5时10分到达彭州。
                </p>
                <p>
                  5&middot;12汶川地震发生后，四川省军区立即启动应急机制。震后半小时内连通了7个军分区，命令每个市（州）立刻集结200人组成民兵应急营，携带运输车辆和工程机械，于震后1小时驰援灾区。正在阿坝州军分区检查指导工作的四川省军区副司令员李亚洲立即率领阿坝州军分区部队和马尔康民兵应急分队300余名官兵直奔灾区。震后3小时，在弄清灾区基本情况后，四川省军区又命令所属预备役部队师、旅、团及其他12个市（州），边集结人员边向灾区开进，形成第二批救援力量。分布在50多个市区县的预备役部队仅用3个小时就成建制向重灾区轻装开进。地震当日，四川省军区迅速动员25805名民兵预编预备役人员开进灾区，做到全面覆盖88个受灾县（市、区），为救援工作赢得了时间，争取了主动。到2008年5月17日，四川省所有军分区（警备区）和预备役部队师旅团成建制出动兵力，共动员组织24个师（旅）级单位、157个人武部、8个预团的民兵预备役人员5.2万人参加抗震救灾。
                </p>
                <p>
                  驻灾区的武警四川省总队、武警四川森林总队和驻川警种各部队在地震发生后，迅速出现在抗震救灾第一线，和地方党政军民一起奋力自救互救，尔后组织警力到重灾区紧急驰援，先后向重灾区集中投入大批兵力。武警四川省总队驻重灾区的19个中队1050名官兵，在避险自救的同时迅速就近实施救援。震后不到20分钟，总队派出先遣组奔赴都江堰市勘查灾情；震后5小时内，总队5000名官兵多路挺进都江堰市、北川县、青川县、什邡市红白镇、绵竹市汉旺镇；震后12小时内，总队8000名官兵覆盖到理县、茂县、安县、平武南坝镇、汶川映秀镇等10个重灾县和乡镇，全力组织救援。在抗震救灾期间，武警四川省总队共出动兵力10590人，车辆18239台次，分赴16个县（市）65个乡镇288个村寨担负抢险救灾任务。
                </p>
                <p>
                  5&middot;12汶川地震发生后，在四川省委、省政府的领导和统一指挥下，在大量救援队伍没到达之前，四川省公安机关组织警力163万余人次、车辆31万余台次，迅速赶赴灾区展开生命救援。受灾地区公安机关出动全部警力，坚守工作岗位，坚持值班执勤，加强巡逻检查，有效地控制社会局面，同时积极参与抢险救灾工作。四川省公安消防总队紧急调集自贡、攀枝花、内江、南充、宜宾、乐山、遂宁、资阳等消防支队跨区域增援，大范围展开解救被困人员、搜救压埋人员和处置次生灾害事故的行动。2008年5月12日17时，四川省公安消防总队相继调集除藏区和重灾区以外的13个支队、总队教导大队共3000余人参加抗震救灾。同日23时，四川省公安消防总队4500人到达重灾区救援。
                </p>
                <p>
                  5&middot;12汶川地震发生后，省级各部门启动救灾应急预案，及时对本系统的救援力量统筹兼顾、统一部署，调集了大批人力、物力、财力以最快的速度奔赴灾区展开救援。特别是地震、气象、交通、通信、电力、建设、广电、医疗卫生等部门组织的科技工作者、技术人员，为抗震救灾提供了有力支持。
                </p>
                <p>
                  成都、德阳、绵阳、广元、雅安、阿坝等6个市（州）灾区，在市（州）党委、政府的领导下，迅速汇聚力量，投入抗震救灾第一线。各灾区领导率领机关干部现场指挥救援，政府各职能部门组织专业骨干队伍抢险救援，全力抢救生命财产，筹集救灾物资，全力安置受灾群众，全力防治次生灾害，全力维护灾区稳定，为夺取抗震救灾胜利做出突出贡献。
                </p>
                <p>
                  在抗震救灾中，四川省各级共青团组织发动广大青年，组织突击队、救援队活跃在救灾第一线；四川省红十字会组织了75支救护队、出动5600人深入灾区一线，实施紧急救援；四川省律师协会和律师事务所的工作人员，开设法律咨询服务站，提供法律援助，投入救援行动；全省建筑、航空、石化、通信、电力、冶金、机械、工矿、商贸流通服务等行业，快速组织救护队、服务队、伤员转运队，在救灾中提供有力支援；全省10多万志愿者积极投入救灾斗争中，用各种方式向地震灾区奉献爱心、为灾区提供服务，在抗震救灾中发挥了重要作用。
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 社会援助
                </h3>
              </div>
              <div class="content">
                <h4>▪ 国内援助</h4>
                <p>
                  全国共接收国内外社会各界捐赠款物（截至2008年9月25日12时为止）总计594.68亿元，实际到账款物总计594.08亿元，已向灾区拨付捐赠款物合计268.80亿元。
                </p>
                <p>
                  捐赠区国家电网2.1亿元，华人首富李嘉诚1.1亿元，全国证券期货行业1.01亿元，荣程钢铁1.1亿元，台塑集团1亿元，恒基地产李兆基1亿元，中国石油1.03亿元，加多宝1亿元，陈光标1亿元。（均为人民币）
                </p>
                <p>
                  不到24小时，来自香港的第一支赈灾队抵达四川；不到48小时，赈灾人员已在北川协助救援……至地震发生一年后，香港立法会共拨捐款90亿港元，民间捐款达130亿港元。民建联一项民调显示，95%的港人曾为四川地震捐款。
                </p>
                <p>台湾省——20亿新台币援助灾区。（约合4.5亿人民币）</p>
                <p>
                  香港特别行政区政府——2008年7月、2009年2月和7月先后三次获立法会财务委员会拨款共计90亿港元，注入特区“支援四川地震灾区重建工作信托基金”，共援建183个项目；香港赛马会10亿港元拨款援建7个项目；民间捐款达130亿港元。
                </p>
                <p>
                  澳门特别行政区政府——1.1亿人民币。（包括半官方的澳门基金会1千万人民币）
                </p>
                <p>来自中国香港20人、中国台湾22人救援队在绵竹市开展救援。</p>
                <h4>▪ 国际援助</h4>
                <p>
                  自5&middot;12汶川地震发生以来，国际社会向中国政府和人民表达了真诚同情和慰问，并提供了各种形式的支持和援助。截至2008年7月18日，外交部及中国各驻外使领馆、团共收到外国政府、团体和个人等捐资17.11亿元人民币。其中，外国政府、国际和地区组织捐资7.70亿元人民币；外国驻华外交机构和人员捐资199.25万元人民币；外国民间团体、企业、各界人士以及华侨华人、海外留学生和中资机构等捐资9.39亿元人民币。
                </p>
                <p>
                  来自日本、俄罗斯、韩国、新加坡的4支境外救援队伍，陆续抵达灾区开展救援行动。俄罗斯51人的救援队在绵竹市开展救援。日本两批60人的专业救援队在青川、北川开展救援。韩国47人的救援队、新加坡55人的救援队在什邡市开展辛苦救援、俄罗斯的救援队在彭州开展救援。
                </p>
                <h4>▪ 国际组织</h4>
                <p>
                  欧盟——欧盟人道主义援助办公室决定通过红十字国际委员会等机构向中方提供200万欧元紧急援助。
                </p>
                <p>联合国儿童基金会——基金会提供30万美元紧急援助。</p>
                <p>
                  国际奥委会——国际奥委会捐款100万美元援助，后又于2008年8月2日与北京奥组委和中国奥委会在北京向四川地震灾区捐款800万美元对口支援。
                </p>
                <h4>
                  ▪ 世界各个国家或地区的捐款捐物统计（以下未按数额顺序排列）
                </h4>
                <p>
                  沙特阿拉伯王国国王阿卜杜拉决定沙特向中方捐赠5000万美元现金和1000万美元物资，帮助中国抗震救灾。（共计约合人民币4.2亿元）
                </p>
                <p>加拿大政府捐助超过3100万加元。（折合人民币约2亿元）</p>
                <p>
                  印度政府决定向中方提供500万美元救灾物资。（约合人民币3500万元）
                </p>
                <p>日本政府决定提供约5亿日元紧急援助。（约合人民币3300万元）</p>
                <p>
                  俄罗斯政府已提供四批救灾物资，价值400万美元。（约合人民币2800万元）
                </p>
                <p>
                  挪威政府将向中国提供2000万挪威克朗紧急救灾援助。（约合人民币2700万元）
                </p>
                <p>
                  意大利政府向中方提供50万欧元和150万欧元的救灾物资。（共计约合人民币2200万元）
                </p>
                <p>
                  土耳其政府决定向中方提供200万美元援助。（估计约合人民币1400万元）
                </p>
                <p>英国将提供100万英镑援助。（约合人民币1360万元）</p>
                <p>西班牙政府将提供100万欧元紧急援助。（约合人民币1080万元）</p>
                <p>
                  爱尔兰政府决定向中国红十字会提供100万欧元现金援助。（约合人民币1080万元）
                </p>
                <p>
                  马来西亚政府决定向中方提供150万美元援助。（约合人民币1050万元）
                </p>
                <p>
                  以色列政府向中方捐赠价值150万美元的救援物资。（约合人民币1050万元）
                </p>
                <p>比利时将提供65万欧元紧急援助。（约合人民币700万元）</p>
                <p>
                  巴基斯坦政府向灾区捐赠价值100万美元的救援物资。（约合人民币700万元）
                </p>
                <p>
                  韩国政府将提供价值100万美元援救资金以及救援物资。（约合人民币700万元）
                </p>
                <p>
                  阿尔及利亚政府决定向中国政府提供100万美元紧急援助。（约合人民币700万元）
                </p>
                <p>
                  澳大利亚政府通过红十字国际委员会向中方提供100万澳大利亚元援助。（约合人民币660万元）
                </p>
                <p>芬兰政府决定向中方提供50万欧元援助。（约合人民币540万元）</p>
                <p>
                  荷兰政府通过红十字国际委员会向中方提供50万欧元援助。（约合人民币540万元）
                </p>
                <p>
                  德国政府向德国红十字会提供50万欧元帮助中国救灾。（约合人民币540万元）
                </p>
                <p>
                  泰国政府已向中国政府捐款50万美元。泰国公主诗琳通向灾区捐款10万人民币。泰国红十字会和普密蓬国王“猜帕塔那”发展基金会各向中国红十字会捐款10万美元。（共计约合人民币500万元）
                </p>
                <p>法国政府提供价值38万欧元的物资。（约合人民币410万元）</p>
                <p>
                  老挝政府决定向中方提供价值50万美元的木材援助。（约合人民币350万元）
                </p>
                <p>美国政府提供50万美元援助。（约合人民币350万元）</p>
                <p>
                  新西兰政府决定通过国际红十字会向中方提供50万新西兰元援助。（约合人民币270万元）
                </p>
                <p>
                  瑞士政府将向中国提供40万瑞士法郎的首笔紧急援助。（约合人民币260万元）
                </p>
                <p>
                  丹麦外交部宣布向中国红十字会提供75万丹麦克朗紧急援助。此外，丹麦红十字会已通过国际红十字会向中方提供价值超过100万丹麦克朗的救灾物资。（约合人民币250万元）
                </p>
                <p>
                  克罗地亚政府通过克罗地亚红十字会向中方提供20万欧元援助。（约合人民币220万元）
                </p>
                <p>
                  希腊政府决定向中国政府提供20万欧元紧急援助。（约合人民币220万元）
                </p>
                <p>
                  新加坡政府决定向中方提供20万美元物资援助。（约合人民币140万元）
                </p>
                <p>
                  越南政府将向中国政府提供20万美元现金援助。（约合人民币140万元）
                </p>
                <p>
                  巴西政府决定向中国政府提供20万美元物资援助。（约合人民币140万元）
                </p>
                <p>
                  斯洛文尼亚政府决定向中方提供10万欧元援助。（约合人民币108万元）
                </p>
                <p>
                  朝鲜政府已决定向中国政府提供10万美元紧急援助。（约合人民币70万元）
                </p>
                <p>
                  柬埔寨首相洪森以柬埔寨王国政府名义捐款10万美元。（约合人民币70万元）
                </p>
                <p>萨摩亚政府向中方提供10万美元援助。（约合人民币70万元）</p>
                <p>
                  波兰外交部已通过中国红十字会向灾区提供10万美元援助。（约合人民币70万元）
                </p>
                <p>
                  立陶宛政府决定向中国红十字会捐款20万立特。（约合人民币63万元）
                </p>
                <p>卢森堡政府决定向中方提供5万欧元援助。（约合人民币54万元）</p>
                <p>
                  蒙古政府已决定向中国政府提供5万美元紧急有效援助。（约合人民币35万元）
                </p>
                <p>
                  爱沙尼亚政府将向中国捐款50万爱沙尼亚克朗。（约合人民币34万元）
                </p>
                <p>
                  捷克政府决定向中方提供70万捷克克朗物资援助。（约合人民币30万元）
                </p>
                <p>
                  阿尔巴尼亚政府决定向中方提供4万美元援助。（约合人民币28万元）。
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 灾后重建
                </h3>
              </div>
              <div class="content">
                <h4>▪ 重建条例</h4>
                <p>
                  2008年6月4日，国务院第11次常务会议通过《汶川地震灾后恢复重建条例》，2008年6月8日国务院令第526号予以公布，自公布之日起施行。
                </p>
              </div>
              <div class="content">
                <h4>▪ 对口支援</h4>
                <p>
                  2008年6月18日，《汶川地震灾后恢复重建对口支援方案》正式颁布，统一部署对口支援任务，创新提出“一省帮一重灾县，举全国之力，加快恢复重建”。明确要求19个省市以不低于1%的财力对口支援重灾县市3年。
                </p>
                <p>
                  在地震发生后不到三个月，就解决了上千万受灾群众的住房安置问题。全国各地纷纷响应国家号召，同灾区当地结成对子，针对灾区对口实际，派人给物，不惜一切代价，在汶川的大地上留下了一幅幅共建情谊。
                </p>
                <p>2016年，浙江省投资828万元，对口支援松潘县经济社会发展。</p>
                <table log-set-param="table_view" data-sort="sortDisabled">
                  <caption>
                    对口支援一览
                  </caption>
                  <tbody>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">山东省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省绵阳市北川县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">广东省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省阿坝州汶川县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">浙江省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省广元市青川县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">江苏省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省德阳市绵竹市
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">北京市</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省德阳市什邡市
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">上海市</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">四川都江堰市</div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">河北省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省绵阳市平武
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">辽宁省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省绵阳市安县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">河南省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省绵阳江油市
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">福建省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">四川省彭州市</div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">山西省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省阿坝州茂县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">湖南省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省阿坝州理县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">吉林省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省阿坝州黑水县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">安徽省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省阿坝州松潘县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">江西省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省阿坝州小金县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">湖北省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省雅安市汉源县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">重庆市</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">四川省崇州市</div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">海南省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省雅安市宝兴县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">黑龙江省</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          四川省广元市剑阁县
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">
                          广东省（主要由深圳市）
                        </div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          甘肃省受灾严重地区
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">天津市</div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          陕西省受灾严重地区
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th width="375" height="30">
                        <div class="para" label-module="para">
                          香港特别行政区
                        </div>
                      </th>
                      <td width="375" height="30">
                        <div class="para" label-module="para">
                          卧龙自然保护区
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="content">
                <h4>▪ 重建成果</h4>
                <p>
                  从2008年10月到2010年9月，灾区纳入国家重建规划的29700个重建项目已开工99.3%、完工85.2%，概算总投资8613亿元已完成7365.9亿元、占85.6%，圆满完成中央“三年重建任务两年基本完成”的目标。受灾群众住进了新房，公共服务设施全面上档升级，重建城镇初展新姿，基础设施根本性改善，产业发展优化升级，防灾减灾能力显著提高。
                </p>
                <p>
                  截止2012年5月，四川省纳入国家灾后恢复重建总体规划的29692个项目已完工99%，概算投资8658亿元已完成投资99.5%；地震灾区实现了“家家有房住”，基本实现了“户户有就业”“人人有保障”。
                </p>
                <p>
                  2016年5月11日，由香港特别行政区政府援建的灾后恢复重建工程——省道303线映秀至卧龙段公路胜利贯通。预计2016年10月底前全线完工。
                </p>
                <p>
                  2016年5月10日至12日，香港特别行政区政府政务司司长林郑月娥率领80人的代表团在四川考察了在川港资企业发展现状及香港援建项目情况。除省道303映卧路和绵茂公路两个道路项目尚未完工外，其余项目全部竣工，并投入使用。
                </p>
              </div>
              
      `
    },
    {
      id: "item6",
      title: "后世纪念",
      html: `
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 哀悼日
                </h3>
              </div>
              <div class="content">
                <p>
                  为表达全国各族人民对5&middot;12汶川地震遇难同胞的深切哀悼，国务院决定，2008年5月19日至21日为全国哀悼日。在此期间，中国全国和各驻外机构下半旗致哀，停止公共娱乐活动，外交部和中国驻外使领馆设立吊唁簿。
                </p>
                <p>
                  2008年5月19日14时28分起，全国人民默哀3分钟，届时汽车、火车、舰船鸣笛，防空警报鸣响。全国人民静立默哀。胡锦涛、吴邦国、温家宝、贾庆林、李长春、习近平、李克强、贺国强、周永康等领导同志在中南海怀仁堂前肃立默哀3分钟。全国人大常委会、国务院、全国政协、中央军委有关负责同志同时哀悼。香港的轮船、火车和非运营状态中的公交车辆同时鸣笛，向四川地震遇难者致哀。时任香港特别行政区行政长官曾荫权率全体公务员默哀。中国驻外使领馆、驻国际组织代表处、中资机构等举行悼念活动，参加活动全体人员默哀3分钟，沉痛悼念四川汶川大地震遇难者。
                </p>
                <p>
                  在2008年5月19日至21日全国哀悼日期间，北京奥运会圣火将暂停传递。2008年5月19日4时58分，北京天安门广场在正常的升旗仪式后下半旗，以表达全国各族人民对四川汶川大地震遇难同胞的深切哀悼。
                </p>
                <p>
                  2008年5月19日至22日，为全国哀悼日。在此期间，全国和各驻外机构下半旗志哀，停止公共娱乐活动，外交部和中国驻外使领馆设立吊唁簿。5月19日14时28分起，全国人民默哀3分钟，届时汽车、火车、舰船鸣笛，防空警报鸣响。
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 防灾减灾日
                </h3>
              </div>
              <div class="content">
                <p>
                  经国务院批准，自2009年起，每年5月12日被定为全国防灾减灾日。届时，四川省组织人员进行大规模地震应急演练，模拟指挥、救援、后勤保障等，涉及的场所涵盖了社区、学校、医院等。
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 公祭
                </h3>
              </div>
              <div class="content">
                <p>
                  每到汶川大地震周年，全国有关重要人员以及四川汶川各族民众聚集在映秀镇漩口中学遗址，身着素衣，面对遗址，整齐列队，深切哀悼罹难同胞，为在抗震救灾中英勇牺牲的烈士和地震中的遇难同胞举行悼念活动
                </p>
              </div>
              <div class="para-title level-3" label-module="para-title">
                <h3>
                  <i class="fa fa-play" aria-hidden="true"></i> 地震纪念馆
                </h3>
              </div>
              <div class="content">
                <p>
                  5&middot;12汶川特大地震纪念馆包括室内场馆和室外遗址两部分。室内场馆包括主馆（地震纪念馆）、副馆（地震科普体验馆），室外场馆包括北川老县城地震遗址、沙坝地震断层、唐家山堰塞湖遗迹，于2013年5月9日正式向社会公众免费开放。
                </p>
                <div align="center" class="tupian">
                  <img
                    id="tsvg"
                    src="images/14ce36d3d539b6003af34fec2403222ac65c10381916.jpg"
                  />
                  <br />
                  <span style="font-size: 12px;">5&middot;12汶川特大地震纪念馆</span>
                </div>
              </div>
              
      `
    },
    {
      id: "item7",
      title: "地震启示",
      html: `
              <div class="content">
                <p>
                  地壳形变观测到断裂带应变积累速率低不等于长期应变积累水平（总量）低；巴颜喀拉地块向东运动受到稳定的四川盆地阻挡，必然在龙门山断裂带积累大量弹性应变能，这种高应变积累的构造背景与地形变观测到跨断裂带极低的应变积累速率的矛盾，可能显示了逆冲型大震孕育到晚期地壳弹性变形趋于极限的状态，对这样有高应变积累构造背景而观测到应变积累速率很低的断裂带（段）正需要重视。
                </p>
                <p>
                  GPS观测显示，汶川大地震发生在印度板块北东向推挤增强后青藏地块北东东向运动增强的大区域构造动力作用增强的背景下，震中位于中国大陆整体应变场东西向分量应变率大范围负值（挤压）区最大值区内的前缘。从小尺度来看，龙门山断裂带多年处于低应变率积累状态，且主应变率方向与长期构造变形背景不一致。大、小尺度及与长期背景的明显差异可能是以逆冲为主的断裂带大震危险性逼近的重要表现。
                </p>
                <p>
                  对大震引起应力场调整的影响通常与离开大震破裂的距离衰减及与构造分布有关，当出现对大震引起应力场调整的响应不协调的“受阻”带，可能表明该地带处于地壳弹性变形趋于极限而难以继续发生变形的高应力水平状态，正是值得关注的大震危险地带。
                </p>
                <p>
                  大地震的预测需要从大时空尺度、大一小时空尺度配套来研究，需要配套的观测基础支持。大地震的触发因素等问题需进一步研究。
                </p>
              </div>
              
      `
    },
    {
      id: "item8",
      title: "地震对比",
      html: `
              <div class="content">
                <p>
                  汶川地震发生在龙门山推覆构造带中；而芦山地震（4&middot;20雅安地震）发生在四川盆地内，靠盆地西南侧。汶川地震由龙门山推覆构造带中出露地表的彭灌断裂引发，因此地表破裂明显，余震及烈度都明显受断裂控制，呈NE方向线状展布长达240千米；而芦山地震由位于盆地内西南侧地腹的隐伏断裂或新生隐伏断裂引发，属点式破裂，地表破裂不明显，余震及烈度呈椭圆状展布。
                </p>
                <p>
                  两次地震均属构造地震，从构造动力学角度分析均与印度板块向北挤压碰撞有关；但2次地震发震断裂和发震构造单元特征是不同的，应属2次独立地震。
                </p>
                <p>
                  盆地中断层具有前展式扩展的特点，随着时间的推移，断裂有逐渐向盆地内扩展的趋势，因此，应加强对盆地内隐伏断裂研究的力度。
                </p>
                <div align="center" class="tupian">
                  <img
                    id="tsvg"
                    src="images/574e9258d109b3de9c8227be5bed7b81800a18d8e690.jpg"
                  />
                  <br />
                  <span style="font-size: 12px;">芦山地震与汶川地震的震中周边地区断裂构造分布简图</span>
                </div>
              </div>
            </div>
          
      `
    },
  ]
};