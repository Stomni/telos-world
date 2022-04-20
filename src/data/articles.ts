type topic = {
  name: string;
  desc: string;
};

type articles = {
  category: string;
  topics: topic[];
};

export const articleList: articles[] = [
  {category: "Entitäten", topics: []},
  {category: "NPCs", topics: []},
  {category: "Politik", topics: [
    {name: "Feuerreich", desc: ""},
    {name: "Imperium Palatin", desc: "Das Palatinische Imperium wird regiert von einem Kaiser und dem Senat. Im Senat sitzen 14 Senatoren, jeweils zwei Personen aus jeder Institution. Jede Stadt wird von einem Tribun regiert, welcher immer von einer Institution stammt.  \n\nInstitutionen:\n\nAternum Scoprio\nZuständigkeit: Agrakultur, Flora und Fauna\nHauptsitz: Vradan\nSenatoren: Felice Mallory, Rang Arcanist | Edwin Lancaster, Rang Admiral\n\nCuratio Salus\nZustädigkeit: Gesundheit und Wohlstand\nHauptsitz: Aventin\nSenatoren: Liliana Embers, Rang Arcanist | Kara Lancaster, Rang Admiral\n\nDefensio Civitas\nZuständigkeit: Infrastruktur, Sicherheit und Recht\nHauptsitz: Esquillin\nSenatoren: Ammon Valac, Rang Berserker | Rangrim Glutbart, Rang Admiral\n\nDivitia Maxima\nZustädigkeit: Finanzen und Steuern\nHauptsitz: Warcrest\nSenatoren: Aerith Jeb, Rang Arceus | Kairon Barakas, Rang Berserker\n\nInsomnis Vigilis\nZuständigkeit: Arkanes, Kunst und Geschichte\nHauptsitz: Aramore\nSenatoren: Mina Odion, Rang Arceus | Ishmaeal Zahid, Rang Arceus\n\nSaevus Aquidus\nZustädigkeit: Marine und Ozeanografie\nHauptsitz: Portus Fractus\nSenatoren: Railtun Vylrint, Rang Admiral | Balasar Blauschweif, Rang Admiral\n\nSangius Gladius\nZuständigkeit: Militär und Kampftechnologien\nHauptsitz: Garthram\nSenatoren: Ben Zokos, Rang Arceus | Talin Sala, Rang Berserker"},
    
  ]},
  {
    category: "Spieler Charakter",
    topics: [
      { name: "Benjamin J.", desc: "Backstory:\nGeboren in Erastin als Sohn von zwei Palatinischen Soldaten, ist er dort als Waise aufgewachsen. In jungen Jahren hat er sich mit Gängaktivitäten über Wasser gehalten, bis sich irgendwann ein berühmter Koch, Pagus Romano, sich Ben angenommen hat und ihn selbst zum Koch ausbildete. Ben sollte für ein besonderes Gericht ein Salek Frucht aus dem Nachtwald besorgen, dort fand er einen alten mysteriösen Altar, wo ihn eine Stimme die Macht von Atropus anbot. Durch die verpeiltheit von Ben nahm er dieses Angebot an und so nahm sein Schicksal eine andere Richtung ein. Kurz darauf traf er auf Ziora und machte sich auf die Reise die Welt zu erkunden.\nKlasse:\nPact of the Undying Warlock | Void (Homebrew) Sorcerer\nRasse: Mensch" },
      { name: "Gellea Felsenfaust", desc: "Backstory:\nGeboren in Khrain als Tochter von zwei Steinmetzen. Als der Konflikt zwischen dem Feuerreich und dem Palatinischen Imperium größer wurde, musste ihre Eltern in den Kriegsdienst eintreten und Gellea ging im Alter von zwölf Jahren zu ihrem Onkel Arrin. Vor den Auswirkungen des Krieges flüchtend, gingen sie von Stadt zu Stadt und glaubten sich eines Tages in der Zwergenstadt Coruscatio sicher zu sein. Dort erweckten sich verborgene Kräft in Gellea und wurde von Fanatikern entführt und gefangen genommen um an ihr zu experimentieren. Gellea verlor dabei ihr Gedächtnis und schaffte es dort eines Tages zu flüchten und traff danach auf Ben, Horizon und Lucardis.\nKlasse:\n Ancestral Guardian Barbarian\nRasse: Hügel Zwerg"},
      { name: "Horizon B105 (inaktiv)", desc: "Backstory:\n \nKlasse:\nCleric of the Forge | Circle of Spores Druid\nRasse:\nWarforged\nVerschwinden:\n Verschlungen von einem Sand Wurm in der Subarra." },
      { name: "Lucardis Corinth (inaktiv)", desc: "Backstory:\n \nKlasse:\n Arcane Archer Fighter\nRasse:\nKalashtar\nVerschwinden:\nMusste ihren eigenen Weg gehen um ein Problem zu lösen." },
      { name: "Zesa of the Suncoat", desc: "Backstory:\n \nKlasse:\nRune Knight Fighter | Shadow Sorcerer\nRasse:\nLeonin" },
      { name: "Ziora Akkhiato (inaktiv)", desc: "Backstory:\n \nKlasse:\nCircle of the Moon Druid\nRasse:\nWaldelf" },
    ],
  },
];
