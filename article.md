title: "Akéla, Rikitan nebo Řízek. Jaké byly nejčastější skautské přezdívky v minulosti a jaké jsou dnes?"
perex: "Junák slaví 50 let od znovupovolení během Pražského jara. Stejně jako tehdy, i dnes skauti zažívají velký návrat."
authors: ["Jan Boček", "Jan Cibulka"]
published: "29. března 2018"
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/img_7056_zdroj_-_arc_180327-213650_jab.jpg?itok=e0oyIMHU
coverimg_note: "Záběry ze skautského tábora. Foto: archiv Břetislava Loubala"
styles: ['https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.3.0/MarkerCluster.css', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.3.0/MarkerCluster.Default.css']
libraries: [jquery, highcharts, d3, 'https://code.highcharts.com/modules/annotations.js', 'https://code.jquery.com/jquery-1.12.4.js', 'https://code.jquery.com/ui/1.12.1/jquery-ui.js', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.js', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.3.0/leaflet.markercluster.js', 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.min.js', 'https://dev.datarozhlas.cz/skauti-mapa/zakladny.js']
options: []
---

## Zadejte přezdívku

<div class="ui-widget">
    <label for="tags"></label>
    <input id="tags" value="Šiška">
</div>

<div id="nick-info"></div>

<hr>

Skautské přezdívky ilustrují dějiny komplikovaného dvacátého století. Tři zákazy skauta – nacistický v roce 1940, stalinistický o deset let později a normalizační v roce 1970 – se odráží i v dobových přezdívkách.

Počet českých skautů, kteří se sdružují v organizaci Junák – český skaut, letos překonal šedesát tisíc. Přibližně třetina z nich se hlásí k nějaké přezdívce. Přestože známe přezdívky pouze současných členů Junáka, jejich věk prozrazuje jména typická pro různá období. Nejstarší generace skautů se nejčastěji inspirovala postavami z Kiplingovy Knihy džunglí: Mauglí, Akéla nebo Balů.

„Skautské aktivity mají vždy nějaký symbolický rámec,“ vysvětluje mluvčí Junáka Barbora Trojak, sama Brambůrka. „Část programu vlčat, to jsou kluci zhruba mezi osmi a deseti lety, dodnes vychází právě z Knihy džunglí.“

Generace, která vstupovala do skauta krátce po osvobození, si zase ráda nechala říkat anglicky znějícími jmény – Johny, Mary, George.

<div style="max-width: 100%; overflow: hidden; display: block;">
    <div class="chart small" id="maugli"></div>
    <div class="chart small" id="us"></div>
</div>
<div style="max-width: 100%; overflow: hidden; display: block;">
    <div class="chart small" id="sipy"></div>
    <div class="chart small" id="tolkien"></div>
</div>

Další příležitost dostalo skautské hnutí v roce 1968. Tentokrát jen na dva roky. Generace šedesátých let nicméně zanechala v datech stopu v podobě Rychlonožků, Bidel a Červenáčků.

Během krátkého uvolnění v šedesátých letech do skautu vstoupila řada osobností. Mohlo se tam dát dohromady třeba divadlo Sklep: skautovat začal sklepácký režisér Václav Marhoul, herci Eva Holubová, David Vávra nebo Tomáš Hanák.

„Na nějakém papíře na sloupech bylo ručně napsáno, že se zakládá oddíl vodních skautů,“ řekl Radiožurnálu Tomáš Hanák. „Bylo to, myslím, ještě před okupací, to mi bylo jedenáct let. Na těch sloupech bylo napsáno, že oddíl vede bratr Beneš. Já jsem se omylem domníval, že tam není br. Beneš, ale dr. Beneš, tak jsem ho měl za lékaře, čemuž vůbec neodpovídaly jeho hrubé ruce. Často jsem si říkal, že to vůbec nemůže být chirurg nebo lékař. Byl to br. Beneš, ne dr. Beneš!“

„Musím říct, že třeba bobříci byli strašně příjemní. Třeba bobřík mlčení byla velká zkouška a já s tím dodnes vůbec nemám problém.“

„V posledních letech navíc sám cestuji a cestuji skutečně sám,“ pokračuje Hanák. „Často nemám mapu ani navigaci, ale nebojím se jít někam, kde to neznám. Říkám si, že možnost, že zemřu, je až ta poslední. Třeba tam bude nějaké dobrodružství!“

Po dosud posledním obnovení skauta v roce 1989 zase začaly být populární přezdívky z tolkienovských příběhů: Hobit, Glum, Frodo nebo Gandalf.

Většina skautských přezdívek se ale neváže k žádnému historickému období a vychází spíš ze sdílených zážitků. Nejčastějším zdrojem jsou zvířecí jména; vůbec nejobvyklejší skautskou přezdívkou je _Veverka_, nejoblíbenějšími ptačími přezdívkami jsou protichůdní _Orel_ a _Kuře_. Běžná je také rodina, pečivo nebo interpunkce.

<wide><div style="max-width: 100%" id="prezdivky"></div></wide>

<div style="max-width: 100%; overflow: hidden; display: block;">
    <div class="chart small" id="rodina"></div>
    <div class="chart small" id="ptaci"></div></div>
<div style="max-width: 100%; overflow: hidden; display: block;">
    <div class="chart small" id="pecivo"></div>
    <div class="chart small" id="interpunkce"></div>
</div>

## Indiáni na konci normalizace

Během sedmdesátých a osmdesátých let, kdy byl skaut opět v ilegalitě, se jeho příznivci nejčastěji schovávali v různých sportovních a turistických organizacích nebo Svazarmu, sdružujícím sportovní svazy. Tímhle způsobem se ukrýval například Druhý pražský oddíl _Hoši od Bobří řeky_, v letech 1927 až 1987 vedený Jaroslavem Foglarem. Podobně přežívaly i další skupiny, vzdálené oficiální komunistické ideologii: třeba čeští indiáni.

„Těsně před revolucí jsem vstoupil do indiánského oddílu – tedy kmene – Konestoga,“ vypráví ex-indián Petr Kočí s přezdívkou _Varan_. „Zasloužilí bojovníci měli komplikovaná jména v lakotštině. Samotného mě překvapuje, že si některá pamatuji dodnes. Náš náčelník se například jmenoval _Šagoiewatha_, další byli _Wanigiska_, _Mayašleča-nala_ nebo _Tewagion_. Šaman měl jméno _Lelašikah_ – _Ten, který kráčí proti proudu_.“

Sám Kočí ovšem takové indiánské jméno nikdy nezískal. „Měl jsem asi málo orlích per, to byla u nás indiánů obdoba známějších bobříků,“ vzpomíná.

<img class="embed" src="https://dev.datarozhlas.cz/skautske-prezdivky/fotky/sihasapa.jpg" style="max-width: 100%">

_Středoevropští indiáni na konci normalizace – novoročenka pražského kmene Sihasapa z roku 1989. Foto: archiv Petra Kočího_

„Před revolucí jsme byli součástí Svazarmu,“ říká Kočí. „Pak jsme se začlenili do Junáka, ale vždycky jsme si od něj udržovali trochu odstup. Přišel mi tehdy jako polovojenská organizace a my indiáni jsme byli divočejší a svobodomyslnější, aspoň tak mi to tehdy připadalo.“

Podobně jako kmen Konestoga se ke skautu po jeho obnovení přihlásila i řada dalších oddílů. Na počátku devadesátých let měl přes osmdesát tisíc členů.

<wide><div class="chart" id="clenove"></div></wide>

Jenže po počátečním boomu začalo členů vytrvale ubývat a ještě do konce devadesátých let řada oddílů zanikla.

„Junák v té době ještě neměl propracovaný a usazený systém vzdělávání, takže je možné, že program nepřinesl dětem a mladým lidem, to, co očekávali nebo by je zajímalo,“ vysvětluje skautská mluvčí Barbora Trojak. „Organizace se tehdy potřebovala trochu usadit, vyřešit praktické problémy. Část členů to zřejmě odradilo a poohlédli se, co by mohli dělat jiného.“

Propad skončil teprve v roce 2006 na 40 tisících členů.

„V roce 2005 jsme přijali Chartu českého skautingu a začali systematicky pracovat na změně programové náplně,“ popisuje Trojak. „Měníme aktivity a témata, částečně i metody, i když základem už sto let zůstává skautská výchovná metoda. Hlavní ale bylo znovu oslovit děti a mladé lidi – zvlášť v době, kdy je na tomhle poli velká konkurence.“

To se skautům podařilo. Od roku 2009, kdy mají k dispozici spolehlivá data o počtech členů, nejrychleji přibývalo vlčat a světlušek, tedy dětí mezi osmi a deseti lety. Před třemi lety navíc vznikla kategorie benjamínků pro děti od pěti do sedmi let.

„Loni jsme na táborech napočítali téměř 400 tisíc děťodnů,“ dodává skautská mluvčí.

Na rostoucím počtu benjamínků i starších skautů se nepochybně podepsala také vyšší plodnost. Zatímco v druhé polovině devadesátých let se v Česku rodilo kriticky málo dětí, kolem roku 2005 začalo tohle číslo znovu růst.

<wide><div class="chart" id="slozeni"></div></wide>

„Postupně jsme se také dopracovali k systému vzdělávání dospívajících a dospělých, díky kterému se kluci a holky v oddílech setkávají s opravdu atraktivním programem reagujícím na vývoj a trendy ve společnosti,“ dodává Trojak.

Jednou z činností, která se během sta let proměnila, jsou takzvané odborky, skautská předloha pro Foglarovy bobříky. Zatímco před rokem 1918 se skládaly zkoušky z oborů jako _chůva_ a _korespondent_ a po druhé světové _esperantista, obuvník_ a _telegrafista_, dnes je to _deskovkář, geocacher_ nebo třeba _smartphonista_.

<wide><div style="overflow: hidden; box-sizing: border-box;">
<div><img src="https://dev.datarozhlas.cz/skautske-prezdivky/fotky/odborky1918.jpg" style="max-width: 100%; position: relative; float: left; border-color: white; border-style: solid; border-width: 2px;"</div>
<div><img src="https://dev.datarozhlas.cz/skautske-prezdivky/fotky/odborky1968.jpg" style="max-width: 100%; position: relative; float: left; border-color: white; border-style: solid; border-width: 2px;"/></div>
<div><img src="https://dev.datarozhlas.cz/skautske-prezdivky/fotky/odborky2018.jpg" style="max-width: 100%; position: relative; float: left; border-color: white; border-style: solid; border-width: 2px;"/></div>
</div></wide>

_Fotky ukazují podobu skautských odborek: vlevo je jejich těsně poválečná podoba, uprostřed rok 1968, vpravo detail z webu [odborky.skaut.cz](https://odborky.skaut.cz). Foto: Junák – český skaut_

## Skauti rostou na Ústecku

Skautská střediska jsou po Česku rozprostřená poměrně rovnoměrně: nejhustší síť je logicky ve velkých městech, ale početně silné oddíly najdeme i v menších obcích.

<wide>
    <div id="map"></div>
    <div id="ttip">Vyberte skautské středisko</div>
</wide>

Relativně nejrychleji skautů přibývá v regionu, který na tom v mnoha jiných ohledech, například [školství]( https://www.irozhlas.cz/zpravy-domov/analyza-regionalniho-skolstvi_1803140740_jab) nebo [nezaměstnanosti](https://interaktivni.rozhlas.cz/sudety/), není dobře – na Ústecku. Jen v posledním roce tu přibylo 180 skautů, což je víc než desetinový nárůst.

„Výhoda Sudet je v tom, že tu podobných aktivit je málo – na rozdíl třeba od Prahy tu nemáme téměř žádnou konkurenci a tak řada dětí přirozeně skončí u nás,“ vysvětluje Jakub Mráček, dlouholetý vedoucí teplického střediska Dvojka. Jen za poslední rok se jeho středisko rozrostlo o víc než dvacítku členů.

„Do oddílu jsem přišel v osmnácti v roce 2003,“ popisuje krizi Junáka před patnácti lety. „Středisko tehdy vedl osmdesátiletý bard, ale byl naštěstí dost otevřený, aby je postupně přenechal mladším.“

„V té době byl skaut na personálním dně,“ pokračuje. „Zároveň se odehrávala řada změn na celostátní úrovni – kdyby nebyly, asi bych tu nevydržel. Dnes věnujeme hodně energie vzdělávání vůdců, díky tomu máme prostor pro aktivity, které Junáka zatraktivňují a zviditelňují. Nedávno jsme třeba založili kmen dospělých, kteří se taky chtějí scházet.“

Nejpočetnější jsou skauti v Jihomoravském kraji; je jich k devíti tisícům a jen loni přibylo víc než šest stovek dalších.

Oproti tomu v Karlovarském kraji se počítají na stovky a jde také o jediný region, kde skautů nepřibývá.

„Karlovarský kraj má mnoho specialit,“ vysvětluje Martin Dvořák z krajské rady Junáka. „Mezi ně patří absence dobrých středních a vysokých škol i špatná nabídka práce. Mnoho dětí odjede na střední školy do Plzně, Prahy, nebo dokonce Brna, a nevracejí se.

„Právě stárnutí a vylidňování kraje je asi největší problém,“ pokračuje Dvořák. „Ostatně členové krajské rady sami pracují v jiných krajích, většinou v Praze. Což je velmi neobvyklé a komplikuje nám to práci.“

Zanikající oddíly chtějí skauti vyvážit zakládáním oddílů „na zelené louce“. Snaží se vytipovat místa, kde je o skauting zájem a středisko zde chybí.

„Našim hlavním cílem ale není, aby samo ústředí Junáka zakládalo nové jednotky,“ vysvětluje skautka Šárka Pavlásková. „Spíš chceme vytvořit co nejlepší podmínky a podporu pro všechny zájemkyně a zájemce, aby mohli sami založit nový oddíl.“

„Jednou z největších výzev je změnit názor, že skautský oddíl může začít vést pouze někdo, kdo si sám skautingem prošel jako dítě,“ dodává Pavlásková.

## Problémy židovských skautů: o šábesu se necestuje a nevážou uzly

„Klukům a holkám přináší skaut opravdu všestranný rozvoj včetně duchovního přesahu, který je podle nás velmi důležitý,“ říká skautská mluvčí Barbora Trojak. „Děti ve skautu aktivně zkoumají, jaké hodnoty jsou důležité, učí se pracovat se svým svědomím, oceňovat důležitost pevných vztahů nebo krásu přírody.“

Pro část oddílů je pak duchovní program výraznější součástí jejich činnosti a jsou spojené s konkrétním vyznáním. V Česku je většina zaměřena křesťanským směrem, ale existuje i výjimka: před dvěma lety vznikl oddíl židovských skautů Tuvia.

„Pro dítě z ortodoxní židovské rodiny je náročné až nemožné stát se plnou součástí oddílu, jezdit s nimi na výpravy, jezdit s nimi na tábory, protože o šábesu se necestuje a nerozdělává oheň, nevážou uzly, všechny skautské věci jsou vlastně zakázané a ještě se jí košer, což je při společném skautském vaření prakticky nemožné,“ [vysvětlila Českému rozhlasu](http://www.rozhlas.cz/nabozenstvi/zpravy/_zprava/novy-oddil-pro-zidovske-skauty-vznika-v-praze--1693997) vedoucí oddílu Hana Šiková.

Oddíl navazuje na tradici prvorepublikového židovského skautingu. Cílem bylo vychovat skauty k odchodu do pouště a práci na novém židovském státu.

„Byli tak úspěšní, že měli problém s udržením členské základny, protože se jim členové stěhovali do Palestiny a tím pádem jim ubývali tady,“ doplňuje Šiková.

Z hlediska náboženství jsou v celosvětovém měřítku – skautů je na světě přes padesát milionů – nejpočetnější skupinou muslimové.