# Mozik

ELTE - Alkalmazások fejlesztése tárgy beadandója.

Authors: Bacsó Gergely, Mézes Ádám

Since: 2018.09.23.

## Rövid leírás

Az API mozikhoz, filmekhez és vetítésekhez tartozó adatokat fog kezelni. Az applikációt lehet belépés nélkül is böngészni, viszont ha beregisztrálunk rá, akkor belépés után a kilistázott vetítésekre tudunk majd jegyeket venni.4

## Fogalomjegyzék

* *mozi*: az a hely, ahol filmeket vetítenek
* *film*: ezt vetítik a mozikban
* *vetítés*: megmutatja, hogy egy moziban milyen filmet vetítenek
* *rendelés*: megmutatja, hogy a belépett felhasználó melyik vetítésre vett jegyet

## Szerepkörök 

* *regisztrálatlan felhasználó (ROLE_GUEST)*: látja a mozik, filmek és vetítések adatait, regisztrálhat az oldalra
* *regisztrált felhasználó (ROLE_USER)*: regisztráció utáni felhasználó, aki látja a mozik, filmek és vetítések adatait, belépés után pedig a saját rendeléseit megtekintheti és törölheti, illetve újak rendelést adhat le
* *admin felhasználó (ROLE_ADMIN)*: olyan felhasználó, aki látja a mozik, filmek és vetítések adatait, bármelyik rendelést láthatja, törölheti, újat adhat hozzá és változtathatja, illetve a regisztrált felhasználókból admin felhasználót készíthet, illetve felhasználót törölhet

## Funkcionális követelmények

### SQL táblák

#### CINEMAS

Oszlopnév | Típus | Leírás
--------- | ----- | ------
id | int | elsődleges kulcs
name | varchar | mozi neve
address | varchar | milyen címen található a mozi
rooms_numb | int | mennyi vetítőterem található a moziban

#### ROOMS:

Oszlopnév | Típus | Leírás
--------- | ----- | ------
id | int | elsődleges kulcs
name | varchar | a terem neve
rows | int | sorok száma
seats | int | egy sorban lévő székek száma

#### CINEMA_ROOMS:

Oszlopnév | Típus | Leírás
--------- | ----- | ------
cinema_id | int | a teremhez tartozó mozi
room_id | int | a terem id-je

összetett kulcs(cinema_id, room_id)


#### MOVIES

Oszlopnév | Típus | Leírás
--------- | ----- | ------
id | int | elsődleges kulcs
title | varchar | film címe
desc | text | rövid leírás a filmről
rate | int | értékelés (1-től 10-ig egész szám)
age_limit | int | korhatár

#### PROJECTIONS

Oszlopnév | Típus | Leírás
--------- | ----- | ------
id | int | elsődleges kulcs
cinema_id | int | a vetítést adó mozi ID-je
movie_id | int | a vetített film ID-je
room | int | a terem sorszáma, amiben a vetítés lesz
time | timestamp | vetítés ideje
is_3d | bool | 3d-ben vetítik-e vagy sem
price | int | a jegy ára

#### USERS

Oszlopnév | Típus | Leírás
--------- | ----- | ------
id | int | elsődleges kulcs
role | enum | ROLE_USER vagy ROLE_ADMIN
name | varchar | felhasználó neve
pass | varchar | jelszó
age | int | felhasználó kora

#### ORDERS

Oszlopnév | Típus | Leírás
--------- | ----- | ------
id | int | elsődleges kulcs
user_id | int | a rendelést leadó felhasználó ID-je
projection_id | int | a vetítés ID-je, amire szól a rendelés

### API parancsok

#### ROLE_QUEST

Metódus | Request | Leírás
------- | ------- | ------
POST | /users | regisztrál az oldalra a megadott felhasználói adatokkal

#### ROLE_QUEST, ROLE_USER, ROLE_ADMIN

Metódus | Request | Leírás
------- | ------- | ------
GET | /cinemas | az összes mozi
GET | /cinemas/{id} | az adott ID-vel rendelkező mozi
GET | /movies | az összes film
GET | /movies/{id} | az adott ID-vel rendelkező film
GET | /projections | az összes vetítés
GET | /projections/{id} | az adott ID-vel rendelkező vetítés

#### ROLE_USER

Metódus | Request | Leírás
------- | ------- | ------
GET | /my/orders | a belépett felhasználó összes rendelése
GET | /my/orders/{id} | a belépett felhasználó adott ID-vel rendelkező rendelése
POST | /my/orders | a belépett felhasználónak létrehoz egy új rendelést | 
DELETE | /my/orders/{id} | a belépett felhasználó adott ID-vel rendelkező rendelését törli

#### ROLE_ADMIN

Metódus | Request | Leírás
------- | ------- | ------
GET | /orders | összes rendelés
GET | /orders/{id} | az adott ID-vel rendelkező rendelés
GET | /users | összes felhasználó
GET | /users/{id} | az adott ID-vel rendelkező felhasználó
POST | /cinemas | új mozi
POST | /movies | új film
POST | /projections | új vetítés
PUT | /cinemas | megadott mozi adatainak módosítása
PUT | /movies | megadott film adatainak módosítása
PUT | /projections | megadott vetítés adatainak módosítása
PATCH | /users/{id}/to-admin   | a megadott felhasználót adminná teszi
DELETE | /cinemas/{id} | megadott mozit törli, és a hozzá tartozó vetítéseket és rendeléseket
DELETE | /movies/{id} | megadott filmet törli,, és a hozzá tartozó vetítéseket és rendeléseket
DELETE | /projections/{id} | megadott vetítést törli, és a hozzá tartozó rendeléseket
DELETE | /orders/{id} | megadott rendelés törlése
DELETE | /users/{id} | megadott felhasználó törli, és a hozzá tartozó rendeléseket

### Frontend terv képek

A főoldalon megjelenik majd a legutolsó 4 feltöltött film.

![Főoldal](/images/home.jpg)

A mozik és a filmek oldalon listázódnak majd az adatok. A filmek oldalon linkek lesznek a jegyrendelés oldalra.

![Egy lista](/images/list.jpg)

A jegyrendelés oldalon ha belépünk, automatikusan kitölti a nevünket és az emailünket.

![Jegyrendelés](/images/order.jpg)

A belépés gombra kattintva felugrik a belépés popup.

![Belépés](/images/login.jpg)

Ha adminként lépünk be, akkor a menüsorban megjelenik egy Admin felület menügomb. Ez lenyitható az admin menüre. Az admin menüknek lesz egy lista nézete (itt lehet megnézni az adatokat, törölni őket) és lesz egy részletes nézete (új adat felvitele, régi módosítása).

![Admin oldal példa és menü](/images/admin.jpg)
