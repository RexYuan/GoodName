function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    {
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}

$(document).ready(function(){
    $('.query').on('input', function(){
        var sound = ['a','an','ou','yi','wu','wa','ba','ban','bei','bi','bu','pa','pan','pou','pei','pi','pu','ma','man','mou','mei','mi','mu','fa','fan','fou','fei','fu','da','dan','dou','dei','di','du','ta','tan','you','ti','tu','na','nan','nou','nei','ni','nu','la','lan','lou','lei','li','lu','za','zan','zou','zei','zi','sa','san','sou','si','su','cha','chan','chou','chi','chu','sha','shan','shou','shei','shu','shua','ran','rou','ru','ji','ga','gan','gou','gei','gu','gua','ka','kan','kou','kei','ku','kua','ha','han','hou','hei','hu','hua','a','ai','ao','an','o','ou','e','en','yi','you','yan','yang','yin','ying','long','wu','wa','wo','wei','wai','wan','wen','wang','you','ba','bai','bao','ban','bo','bei','ben','bi','bian','bin','bing','bu','pa','pai','pay','pan','po','pou','pei','pen','pi','piao','pian','pin','ping','pu','ma','mai','mao','man','mo','mou','mei','men','mi','miao','miu','mian','min','ming','mu','fa','fan','fang','fo','fou','fei','fen','fu','da','dai','dao','dan','dong','dou','de','dei','di','diao','dian','ding','du','duo','dun','ta','tai','tao','tan','tang','tong','tou','te','ti','tiao','tian','ting','tu','tun','na','nai','nao','nan','nong','nou','ne','nei','nen','ni','niao','niu','nian','ning','nu','la','lai','lao','lan','lang','long','lou','le','lei','li','lia','liao','liu','lian','lin','ling','lu','lun','za','zan','zong','zou','ze','zei','zen','zi','sa','sai','sao','san','sang','song','sou','se','sen','si','su','suo','sun','cha','chai','chao','chan','chang','chong','chou','che','chen','chi','chu','chuo','che','chen','chi','chu','chuo','sha','shai','shao','shan','shang','shou','she','shei','shen','shu','shua','shuo','shun','rao','ran','rang','rong','rou','re','ren','ru','ruo','run','ji','jia','jiao','jiu','jian','jiang','jin','jing','jun','ga','gai','gao','gan','gang','gong','gou','ge','gei','gen','gu','gua','guai','gun','guang','ka','kai','kao','kan','kang','kong','kou','ke','kei','ken','ku','kua','kuai','kun','kuang','ha','hai','hao','han','hang','hong','hou','he','hei','hen','hu','hua','hun','huang','ang','eng','er','weng','yun','bang','beng','bie','pang','pie','mang','mie','dang','die','diu','dui','duan','teng','tie','tuo','tui','tuan','nang','nene','nie','niang','nin','nuo','nuan','leng','liang','luo','luan','zai','zhai','zhao','zhan','zhang','zhong','zhou','zhe','zhei','zhen','zheng','zhi','zhu','zhua','zhuo','zhui','zhuai','zhuan','zhun','zhuang','cheng','chua','chui','chuai','chuan','chun','chuang','sheng','shui','shuai','shuan','shuang','reng','ri','rua','rui','ruan','geng','guo','gui','guan','keng','kuo','kui','kuan','heng','huo','hui','huai','huan','yue','yuan','nu','nue','lu','lue','ca','cai','cao','can','cang','cong','cou','ce','cen','ceng','ci','cu','cuo','cui','cuan','cun','shi','jie','jiong','ju','jue','juan','qi','qia','qiao','qie','qiu','qian','qiang','qin','qing','qiong','qu','que','quan','qun','xi','xia','xiao','xie','xiu','xian','xiang','xin','xing','xiong','xu','xue','xuan','xun']
        var golden_sound = ['a','an','ou','yi','wu','wa','ba','ban','bei','bi','bu','pa','pan','pou','pei','pi','pu','ma','man','mou','mei','mi','mu','fa','fan','fou','fei','fu','da','dan','dou','dei','di','du','ta','tan','you','ti','tu','na','nan','nou','nei','ni','nu','la','lan','lou','lei','li','lu','za','zan','zou','zei','zi','sa','san','sou','si','su','cha','chan','chou','chi','chu','sha','shan','shou','shei','shu','shua','ran','rou','ru','ji','ga','gan','gou','gei','gu','gua','ka','kan','kou','kei','ku','kua','ha','han','hou','hei','hu','hua']
        var good_sound = ['a','ai','ao','an','o','ou','e','en','yi','you','yan','yang','yin','ying','long','wu','wa','wo','wei','wai','wan','wen','wang','you','ba','bai','bao','ban','bo','bei','ben','bi','bian','bin','bing','bu','pa','pai','pay','pan','po','pou','pei','pen','pi','piao','pian','pin','ping','pu','ma','mai','mao','man','mo','mou','mei','men','mi','miao','miu','mian','min','ming','mu','fa','fan','fang','fo','fou','fei','fen','fu','da','dai','dao','dan','dong','dou','de','dei','di','diao','dian','ding','du','duo','dun','ta','tai','tao','tan','tang','tong','tou','te','ti','tiao','tian','ting','tu','tun','na','nai','nao','nan','nong','nou','ne','nei','nen','ni','niao','niu','nian','ning','nu','la','lai','lao','lan','lang','long','lou','le','lei','li','lia','liao','liu','lian','lin','ling','lu','lun','za','zan','zong','zou','ze','zei','zen','zi','sa','sai','sao','san','sang','song','sou','se','sen','si','su','suo','sun','cha','chai','chao','chan','chang','chong','chou','che','chen','chi','chu','chuo','che','chen','chi','chu','chuo','sha','shai','shao','shan','shang','shou','she','shei','shen','shu','shua','shuo','shun','rao','ran','rang','rong','rou','re','ren','ru','ruo','run','ji','jia','jiao','jiu','jian','jiang','jin','jing','jun','ga','gai','gao','gan','gang','gong','gou','ge','gei','gen','gu','gua','guai','gun','guang','ka','kai','kao','kan','kang','kong','kou','ke','kei','ken','ku','kua','kuai','kun','kuang','ha','hai','hao','han','hang','hong','hou','he','hei','hen','hu','hua','hun','huang']
        var warning_sound = ['ang','eng','er','weng','yun','bang','beng','bie','pang','pie','mang','mie','dang','die','diu','dui','duan','teng','tie','tuo','tui','tuan','nang','nene','nie','niang','nin','nuo','nuan','leng','liang','luo','luan','zai','zhai','zhao','zhan','zhang','zhong','zhou','zhe','zhei','zhen','zheng','zhi','zhu','zhua','zhuo','zhui','zhuai','zhuan','zhun','zhuang','cheng','chua','chui','chuai','chuan','chun','chuang','sheng','shui','shuai','shuan','shuang','reng','ri','rua','rui','ruan','geng','guo','gui','guan','keng','kuo','kui','kuan','heng','huo','hui','huai','huan']
        var bad_sound = ['yue','yuan','nu','nue','lu','lue','ca','cai','cao','can','cang','cong','cou','ce','cen','ceng','ci','cu','cuo','cui','cuan','cun','shi','jie','jiong','ju','jue','juan','qi','qia','qiao','qie','qiu','qian','qiang','qin','qing','qiong','qu','que','quan','qun','xi','xia','xiao','xie','xiu','xian','xiang','xin','xing','xiong','xu','xue','xuan','xun']

        target = $(this).text().match(/[\u00ff-\uffff]|\S+/g);
        ready = true;
        tmp_c = ''
        tmp_r = ''
        if (target != null)
        {
            for (var i=0, len=target.length; i<len; i++)
            {
                c = target[i].hanzi2pinyin();
                if ($.inArray(c, sound) == -1)
                {
                    ready = false;
                    break;
                }
                if ($.inArray(c, golden_sound) != -1)
                {
                    tmp_c = tmp_c + '<span class="golden_char">' + target[i] + '</span>';
                    tmp_r = tmp_r + '<p class="golden_report">「' + target[i] + '」是一個非常棒的字，非常適合美國人讀</p>';
                }
                else if ($.inArray(c, warning_sound) != -1)
                {
                    tmp_c = tmp_c + '<span class="warning_char">' + target[i] + '</span>';
                    tmp_r = tmp_r + '<p class="warning_report">「' + target[i] + '」對有些美國人來說可能很難念</p>';
                }
                else if ($.inArray(c, bad_sound) != -1)
                {
                    tmp_c = tmp_c + '<span class="bad_char">' + target[i] + '</span>';
                    tmp_r = tmp_r + '<p class="bad_report">「' + target[i] + '」沒有美國人唸得出來</p>';
                }
                else
                {
                    tmp_c = tmp_c + '<span class="good_char">' + target[i] + '</span>';
                    tmp_r = tmp_r + '<p class="good_report">「' + target[i] + '」是還可以</p>';
                }
            }
            if (ready)
            {
                $(this).html(tmp_c);
                $('.report').html(tmp_r);
                setEndOfContenteditable(this);
            }
        }
    });
});
