from xpinyin import Pinyin
from nltk.tokenize.util import is_cjk
from random import choice

'''
>>> get_pinyin("女驢呂律拘局舉句需徐許續瘀魚雨玉")
    'nv-lv-lv-lv-ju-ju-ju-ju-xu-xu-xu-xu-yu-yu-yu-yu'
'''

p = Pinyin()

golden_sound = ['a','an','ou','yi','wu','wa','ba','ban','bei','bi','bu','pa','pan','pou','pei','pi','pu','ma','man','mou','mei','mi','mu','fa','fan','fou','fei','fu','da','dan','dou','dei','di','du','ta','tan','you','ti','tu','na','nan','nou','nei','ni','nu','la','lan','lou','lei','li','lu','za','zan','zou','zei','zi','sa','san','sou','si','su','cha','chan','chou','chi','chu','sha','shan','shou','shei','shu','shua','ran','rou','ru','ji','ga','gan','gou','gei','gu','gua','ka','kan','kou','kei','ku','kua','ha','han','hou','hei','hu','hua']
good_sound = ['a','ai','ao','an','o','ou','e','en','yi','you','yan','yang','yin','ying','long','wu','wa','wo','wei','wai','wan','wen','wang','you','ba','bai','bao','ban','bo','bei','ben','bi','bian','bin','bing','bu','pa','pai','pay','pan','po','pou','pei','pen','pi','piao','pian','pin','ping','pu','ma','mai','mao','man','mo','mou','mei','men','mi','miao','miu','mian','min','ming','mu','fa','fan','fang','fo','fou','fei','fen','fu','da','dai','dao','dan','dong','dou','de','dei','di','diao','dian','ding','du','duo','dun','ta','tai','tao','tan','tang','tong','tou','te','ti','tiao','tian','ting','tu','tun','na','nai','nao','nan','nong','nou','ne','nei','nen','ni','niao','niu','nian','ning','nu','la','lai','lao','lan','lang','long','lou','le','lei','li','lia','liao','liu','lian','lin','ling','lu','lun','za','zan','zong','zou','ze','zei','zen','zi','sa','sai','sao','san','sang','song','sou','se','sen','si','su','suo','sun','cha','chai','chao','chan','chang','chong','chou','che','chen','chi','chu','chuo','che','chen','chi','chu','chuo','sha','shai','shao','shan','shang','shou','she','shei','shen','shu','shua','shuo','shun','rao','ran','rang','rong','rou','re','ren','ru','ruo','run','ji','jia','jiao','jiu','jian','jiang','jin','jing','jun','ga','gai','gao','gan','gang','gong','gou','ge','gei','gen','gu','gua','guai','gun','guang','ka','kai','kao','kan','kang','kong','kou','ke','kei','ken','ku','kua','kuai','kun','kuang','ha','hai','hao','han','hang','hong','hou','he','hei','hen','hu','hua','hun','huang']
warning_sound = ['ang','eng','er','weng','yun','bang','beng','bie','pang','pie','mang','mie','dang','die','diu','dui','duan','teng','tie','tuo','tui','tuan','nang','nene','nie','niang','nin','nuo','nuan','leng','liang','luo','luan','zai','zhai','zhao','zhan','zhang','zhong','zhou','zhe','zhei','zhen','zheng','zhi','zhu','zhua','zhuo','zhui','zhuai','zhuan','zhun','zhuang','cheng','chua','chui','chuai','chuan','chun','chuang','sheng','shui','shuai','shuan','shuang','reng','ri','rua','rui','ruan','geng','guo','gui','guan','keng','kuo','kui','kuan','heng','huo','hui','huai','huan']
bad_sound = ['yue','yuan','nu','nue','lu','lue','ca','cai','cao','can','cang','cong','cou','ce','cen','ceng','ci','cu','cuo','cui','cuan','cun','shi','jie','jiong','ju','jue','juan','qi','qia','qiao','qie','qiu','qian','qiang','qin','qing','qiong','qu','que','quan','qun','xi','xia','xiao','xie','xiu','xian','xiang','xin','xing','xiong','xu','xue','xuan','xun']

#bad_chinese = set(map(p.get_pinyin, input("bad chinese?")))
#bad_chinese = set(map(p.get_pinyin, "女驢呂律拘局舉句需徐許續瘀魚雨玉姜辞职去腿四十知道汉语日轮喝水"))
'''
subject = input("enter:")
for s in subject:
    if is_cjk(s):
        t = p.get_pinyin(s)
        if t in golden_sound:
            print(s, 'is good')
        elif t in warning_sound:
            print(s, 'is okay')
        elif t in bad_sound:
            print(s, 'is bad')
'''
l = int(input("len:"))
n = ''
for _ in range(l):
    n+='-'+choice(golden_sound)
print(n)
