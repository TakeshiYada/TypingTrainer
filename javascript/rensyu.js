'use strict';

{
  function setWord() {
    key = keys.splice(Math.floor(Math.random() * keys.length),1)[0];
    name = key;
    spell = words[key];

    target_name.textContent = name;
    target_spell.textContent = spell;
    text.textContent = 'ミスカウント：'+ miss +'　　残り：'+ keys.length;
    num = 0;
  }
  
  const words = {
    'いうおあえ':'iuoae',
    'きくこかけ':'kikukokake',
    'ひふほはへ':'hihuhohahe',
    'ゆよや':'yuyoya',
    'ぴぷぽぱぺ':'pipupopape',
    'きゃきゅきょ':'kyakyukyo',
    'ひゃひゅひょ':'hyahyuhyo',
    'ぴゃぴゅぴょ':'pyapyupyo',
    'みむもまめ':'mimumomame',
    'にぬのなね':'ninunonane',
    'ぢづどだで':'didudodade',
    'ぎぐごがげ':'gigugogage',
    'しすそさせ':'sisusosase',
    'りるろられ':'rirurorare',
    'ちつとたて':'titutotate',
    'をわ':'wowa',
    'びぶぼばべ':'bibubobabe',
    'じずぞざぜ':'zizuzozaze'
  };
  
  let key;
  let keys = Object.keys(words);
  let name;
  let spell;
  let num = 0;
  let miss = -1;

  const target_name = document.getElementById('word');
  const target_spell = document.getElementById('spell');
  const text = document.getElementById('text');

  document.addEventListener('keydown',s => {
    if (s.key === ' ' && target_spell.textContent === '' && target_name.textContent !== 'Finished!'){
      setWord();
    }
  })

  document.addEventListener('keydown',e => {
    if (e.key !== spell[num]){
      miss++;
      text.textContent = 'ミスカウント：' + miss +'　　残り：'+ keys.length;
      if (miss > 20){
        location.href = 'finish.html';
      }
      return;
    }
    num++;
    target_spell.textContent = '_'.repeat(num) + spell.substring(num);

    if (num === spell.length){
        if(keys.length === 0){
          location.href = 'finish.html';
          return;
        }
      setWord();
    }
  });
}