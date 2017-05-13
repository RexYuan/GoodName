from xpinyin import Pinyin
from nltk.tokenize.util import is_cjk

'''
>>> get_pinyin("女驢呂律拘局舉句需徐許續瘀魚雨玉")
    'nv-lv-lv-lv-ju-ju-ju-ju-xu-xu-xu-xu-yu-yu-yu-yu'
'''

p = Pinyin()

#bad_chinese = set(map(p.get_pinyin, input("bad chinese?")))
bad_chinese = set(map(p.get_pinyin, "女驢呂律拘局舉句需徐許續瘀魚雨玉姜辞职去腿四十知道汉语日轮喝水"))

subject = input("enter:")
for s in subject:
    if is_cjk(s) and p.get_pinyin(s) in bad_chinese:
        print(s, 'won\'t work')
