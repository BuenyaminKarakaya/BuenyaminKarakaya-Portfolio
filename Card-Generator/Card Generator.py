import webbrowser
import tkinter
from random import randint as random

Words = "Lorem ipsum dolor sit amet consetetur sadipscing elitr sed dolor sit amet"
Monster_Names = Words.split()
Attribute = ["earth", "wind" , "fire", "water", "dark", "light"]
Card_Type = ["Normal Monster", "Effect Monster ", "Fusion Monster", "Ritual Monster", "Synchro Monster", "XYZ Monster", "Pendulum Monster", "Link Monster"]


class Monster_Card:
    def __init__(self, Name, Level,  Attribute, Attack, Defense, Type):
        self.name = Name
        self.attribute = Attribute
        self.attack = Attack
        self.defense = Defense
        self.level = Level
        self.type = Type

    def __repr__(self):
        return "name: % s  attribute: % s  attack: % s  defense: % s  level: % s  type: % s" % (self.name, self.attribute, self.attack, self.defense, self.level, self.type)
    
    def show_card(self):
        print("name: "+str(self.name))
        print("attribute: "+str(self.attribute))
        print("attack: "+str(self.attack))
        print("defense: "+str(self.defense))
        if self.type == "Link Monster":
            print("link: "+str(self.level))
        elif self.type == "XYZ Monster":
            print("rank: "+str(self.level))
        else:
            print("level: "+str(self.level))
        print("type: "+str(self.type))

Monster_Deck = []
mnl = len(Monster_Names)
for i in range(10):
    this_name = Monster_Names[random(0,mnl-1)]+" " + Monster_Names[random(0,mnl-1)];
    this_attribute = Attribute[random(0, len(Attribute)-1)];
    this_level = random(1,12)
    this_attack = random(0,10) * 500
    this_defense = (random(0,10)) * 500
    this_type = Card_Type[random(0, len(Card_Type)-1)];
    if this_type == "Synchro Monster" and this_level == 1:
        this_level = 2
        
    Monster_Deck.append(Monster_Card(this_name, this_level, this_attribute, this_attack, this_defense, this_type))

deck_list = []
def Deck_Generation():
    for i in range(len(Monster_Deck)):
        deck_list.append(Monster_Deck[i])
        Monster_Deck[i].show_card()
        print("")

Deck_Generation()

html_content = f"<html> <head> <h1> Cards </h1> {deck_list} </head> </html>"
with open("Project portfolio/Card-Generator/index.html","w") as html_file:
    html_file.write(html_content)
    print("Html file created succesfully")

with open("Project portfolio/Card-Generator/index.html","r") as file:
    created_cards = file.readlines()
    for c in created_cards:
        split_lines = c.split(",")
