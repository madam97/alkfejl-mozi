# Mozik
ELTE - Alkalmazások fejlesztése tárgy beadandója.

Authors: Bacsó Gergely, Mézes Ádám

Since: 2018.09.23.

## Leírás
A kódunk mozikhoz tartozó adatokat fog kezelni. Fel lehet majd vinni mozikat, filmeket, hogy mely moziban mit vetítenek. Az alkamazásban rendelni lehet majd jegyeket vetítésekre a felhasználónak, miután beregisztrált, lekérdezheti a mozikat, filmeket és a vetítéseket is.

## Funkcionális követelmények
Az adatokat 4 táblában tároljuk:
* A **cinemas** táblában tároljuk a mozik neveit és címeit (város, utca, házszám)
* A **movies** táblában a filmek címét, rendezőjét, besorolását és rövid leírását
* A **screening** táblában a vetítések tároljuk, hogy melyik moziban melyik filmet vetítik 3d-ben vagy sem
* A **users** táblában a nézők nevét, emailjét, jelszavát és korát tároljuk, ill. hogy a felhasználó admin-e vagy sem
* A **orders** tábla egy rendelés kapcsolótábla, amiből kiolvasható, hogy melyik vetítésre kért jegyet egy user

## Fogalomjegyzék
**mozi**: az a hely, ahol filmeket vetítenek  
**film**: ezt vetítik a moziban  
**vetítés**: megmutatja, hogy egy moziban milyen filmet vetítenek 3d-ben vagy sem  
**rendelés**: megmutatja, hogy egy felhasználó melyik vetítésre vett jegyet  

## Szerepkörök
**admin felhasználó**: olyan felhasználó, aki be tud lépni az alkalmazásba és változtathatja az összes táblákat, ill. lekérdezheti azok tartalmát  
**regisztrált felhasználó**: regisztráció utáni felhasználó, aki csak lekérdezheti a cinemas, movies és screening táblákat, és az orders táblákban a saját sorait változtathatja meg  
**regisztrálatlan felhasználó**: minden, regisztráció nélküli felhasználó, aki csak lekérdezheti a cinemas, movies és screening táblákat
