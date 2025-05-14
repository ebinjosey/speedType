const words = `apple ball cat dog egg fish goat hat ice jam kite leaf milk nest owl pen queen rain sun tree up van water xray yak zoo air bat cup dad ear fan gum hen ink jug key log man net ox pig quilt rat sock top urn vet win box yarn zip run walk jump play read write clap draw paint laugh sing climb ride swim dance bake cook peel cut mix pour stir taste smell see hear touch think feel sleep wake dream snore hug kiss talk shout grow hop skip slide roll crawl bounce pop flip spin nod blink wave chew bite lick pull push carry drop pick throw catch dig hit kick jump hop yawn blink hum nod tap pat rub buzz bark meow moo chirp tweet hoot oink neigh bleat croak quack baa hiss roar peep peck hug grin giggle smile frown nod shrug blink stretch twist shake wiggle blink trip slip bump fall crash bang thud clank click beep ring knock crack creak drip drop splash splat fizz zoom zap zip whoosh blink glow blink beam shine flash flicker sparkle shimmer twinkle blink open close lift lock tug twist push pull tug spin swirl twirl spin wheel frame edge pad mat lens stand cord plug wire bulb tube screen glass clamp hook latch knob pin nail bolt screw tray lid cover case bin bag pot pan cup mug bowl spoon fork knife plate dish jug jar box tin sack basket bucket rope string chain ribbon cloth towel paper book pen pad chalk crayon brush pencil ruler eraser marker sharpener board clock bell whistle flute drum horn gong bugle piano guitar violin trumpet shaker tambourine cymbal stick rod pole cane bat club puck ball puck hoop ring kite balloon plane train truck car bike boat ship rocket sled skis skates surf tube board raft coat shirt dress pants shoes socks boots hat cap scarf gloves jacket shorts jeans belt laces zip buttons pockets sleeve collar tag badge sticker stamp coin cash bill card phone tablet laptop camera radio lamp torch watch key chain lock tag bell frame clip note ticket map plan list chart graph sign post bell flag star moon sun cloud rain wind snow fog mist storm wave fire ice smoke dust light dark shade bright dull soft hard rough smooth sharp blunt hot warm cool cold wet dry thick thin wide narrow deep shallow tall short long small tiny big huge giant great fast slow quick still loud quiet clear soft sweet sour salty bitter spicy bland clean dirty neat messy new old young aged fresh stale sweet sour juicy dry rich plain full empty early late soon never always often rarely sometimes now then today tomorrow tonight morning evening noon dawn dusk week month year spring summer autumn winter day night north south east west left right up down front back near far in out on off by with from to at for of about above below under over between among beyond across around through during inside outside against along before after without within under beside atop behind toward into onto upon around`.split(' ');
const wordsCount = words.length;

function addClass(el, name) {
    el.className += ' '+name;
}

function removeClass(el, name) {
    el.className = el.className.replace(name,'');
}

function randomWord() {
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex]
}

function formatWord(word) {
    return `<div class="word">
    <span class="letter">
        ${word.split('').join('</span><span class="letter">')}
        </span>
    </div>`;
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++) {
        document.getElementById('words').innerHTML += formatWord(randomWord());
    }
    document.querySelector('word')
}

document.getElementById('game').addEventListener('keyup', ev => {
    const key = ev.key;
        console.log(key);
    }
)

newGame()