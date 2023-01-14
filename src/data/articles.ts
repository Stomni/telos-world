type topic = {
  name: string;
  desc: string;
};

type articles = {
  category: string;
  topics: topic[];
};

export const articleList: articles[] = [
  {
    category: "NPCs",
    topics: [
      {
        name: "Arachin",
        desc: "Kindheitsfreund von Ben\nMitglied der Aternum Scorpio",
      },
      { name: "Aarmaros", desc: "Teufel" },
      {
        name: "Arrin Winterspeer",
        desc: "Onkel von Gellea\nLebt derzeit in Coruscatio und bekämpf dort die Drachenwacht.",
      },
      { name: "Atropus", desc: "Titan der Leere" },
      { name: "Atilus", desc: "Inhaber einer Taverne nördlich in Erastin" },
      { name: "Brutus", desc: "Juwelier aus Erastin" },
      { name: "Carl und Lucas", desc: "Banditen des Iron Domes" },
      {
        name: "Casella",
        desc: "Kindheitsfreundin von Ben\nLeiterin des Waisenhausen in Erastin\nMitglied der Curatio Salus",
      },
      { name: "Cedric Duval", desc: "Prinz der Leere von Atropus" },
      { name: "Chronos B104", desc: "Bruder von Horizon" },
      { name: "Damir", desc: "Händler des Schwarzmarktes in Vectis" },
      { name: "Dakira Peacescale", desc: "Prime der Curation Salus" },
      {
        name: "Darius",
        desc: "Mitglied der Insomnis Vigilis\nSpezialist für Warforged Psyche",
      },
      { name: "Decima", desc: "Hauptwachfrau der Imperialen Garde in Erastin" },
      { name: "Die Frau in Weiß", desc: "Oberhautp des Widerstandes" },
      { name: "Din", desc: "Maskierter Mann der von Lucius angeheuert wurde" },
      {
        name: "Donna Silver",
        desc: "Alte Frau die alleine in einer Hütte im Wald in der nähe von Esquillin lebt",
      },
      {
        name: "Dorna",
        desc: "Kindheitsfreundin von Ben\nMitglied der Aternum Scoprio",
      },
      {
        name: "Familie Becker",
        desc: "Bäckerfamilie aus Capsan\nDavid gerettet durch die Gruppe",
      },
      { name: "Dracon Marek", desc: "Drakon des Imperiums" },
      { name: "Edos", desc: "Titan\n Erzieher von Rokan dem Leviathan" },
      { name: "Edward Crazy Guy", desc: "Chemiker aus Esquillin" },
      { name: "Enlana", desc: "Drakezüchterin aus Aramore" },
      { name: "Feuerbart", desc: "Inhaber der Taverne Lavahöhle in Esquillin" },
      { name: "Flex", desc: "Boss der Ghettos in Aramore" },
      {
        name: "Gallan Galadriel",
        desc: "Inoffizieller Sherrif von Kriggan\nVerbannter Elf aus Aston",
      },
      {
        name: "General Laxus",
        desc: "General des Imperiums\n Geholfen beim Angriff in Capsan",
      },
      { name: "Gido", desc: "Bibliothekar in Aramore" },
      { name: "Grim", desc: "Anführer der Kodan in Aramore" },
      { name: "Holgen", desc: "Kindheitsfreund von Ben\nImperiale Garde" },
      { name: "Isola der Red Dragon", desc: "Oberhaupt des Widerstandes" },
      { name: "Janine", desc: "Kräuterhändlerin aus Vectis" },
      { name: "Jasper Bold", desc: "Gefangener im Tempel von Null" },
      { name: "Kaleido", desc: "Assassine für Isola" },
      { name: "Lamin", desc: "Rezeptionist des Schwarzmarktes in Vectis" },
      { name: "Lance der Bard", desc: "Reisender Barde\n Hasst die Gruppe..." },
      { name: "Lapis", desc: "Erd Genasi aus Kriggan" },
      { name: "Lucius", desc: "Untergrundboss in Erastin" },
      {
        name: "Ludwen",
        desc: "Postangestellter der Zentralen Poststation in Aramore",
      },
      {
        name: "Mina Odion",
        desc: "Senatorin des Imperiums\nOberhaupt der Insomnis Vigilis",
      },
      { name: "Nadine", desc: "Inhaberin des Saloons in Kriggan" },
      {
        name: "Nakzul Muskelkiller",
        desc: "Anführer der Bergorcs in Tregaron",
      },
      { name: "Nobu", desc: "Herrscher von Neu Coruscat" },
      { name: "Null der Nachtdrache", desc: "?" },
      { name: "Pall", desc: "Inahber des Lausigen Zaubertranks in Aramore" },
      { name: "Rain", desc: "Ehemalige Wächertin des Blauenwaldes" },
      { name: "Ruak die Arrogante", desc: "Anführerin der Orcs in Tregaron" },
      { name: "Sandra", desc: "Inhaberin des Himmlischen Imps in Capsan" },
      {
        name: "Salem Greyhorn",
        desc: "Alter Mann aus dem Arcana Distrikt in Aramore",
      },
      {
        name: "Sarven",
        desc: "Inhaber des Bognereigeschäfts Blitzschnell in Aramore",
      },
      { name: "Shuah Kniebrrecherin", desc: "Anfüherin der Orogs in Tregaron" },
      {
        name: "Silas Blanc",
        desc: "Inahber des Goldenen Libram\nEx-Kampfmagier des Imperiums",
      },
      { name: "Selee die Entropie", desc: "Oberhaupt des Widerstandes" },
      { name: "Tia", desc: "Inhaberin von Tias Glitzereien in Aramore" },
      { name: "Tempestax", desc: "Antiker Sturmdrachen" },
      {
        name: "Teos of the Suncoar",
        desc: "Admiral des Imperiums\nZesa großer Bruder",
      },
      {
        name: "Trion",
        desc: "Anhänger von Isola\nLeonin mit Aetherfähigkeiten",
      },
      { name: "Trunks", desc: "Kartograph aus Esquillin" },
      { name: "Valkoria", desc: "Anführerin von Kriggan\nPaladin von Remnis" },
      {
        name: "Verenastra",
        desc: "Archfey des Nachtwaldes\nTochter der Titania",
      },
      {
        name: "Violett Vac´azla",
        desc: "Kalashtar des Vac´atla Ordens in Aramore",
      },
      { name: "Voraagon", desc: "Dämon des Abyss" },
      {
        name: "William Heavenstein",
        desc: "Staatsfeind des Imperiums\nMeister von Cedric",
      },
      {
        name: "Yesra",
        desc: "Merküdige Feydame\nGetroffen im Lausigen Zaubertrank in Aramore",
      },
      { name: "Zinran", desc: "Anhänger von Bahamut aus Vectis" },
      { name: "Zokk der Brutale", desc: "Anführer der Oger in Tregaron" },
      {
        name: "Zozora Sonnenherz",
        desc: "Anführerin der Sonnenherzen, einem Leonin Stamm in der Subarra",
      },
    ],
  },
  {
    category: "Politik",
    topics: [
      { name: "Alephia", desc: "" },
      { name: "Feuerreich", desc: "" },
      {
        name: "Imperium Palatin",
        desc: "Das Palatinische Imperium wird regiert von einem Kaiser und dem Senat. Im Senat sitzen 14 Senatoren, jeweils zwei Personen aus jeder Institution. Jede Stadt wird von einem Tribun regiert, welcher immer von einer Institution stammt.  \n\nInstitutionen:\n\nAternum Scoprio\nZuständigkeit: Agrakultur, Flora und Fauna\nHauptsitz: Vradan\nSenatoren: Felice Mallory, Rang Arcanist | Edwin Lancaster, Rang Admiral\n\nCuratio Salus\nZustädigkeit: Gesundheit und Wohlstand\nHauptsitz: Aventin\nSenatoren: Liliana Embers, Rang Arcanist | Kara Lancaster, Rang Admiral\n\nDefensio Civitas\nZuständigkeit: Infrastruktur, Sicherheit und Recht\nHauptsitz: Esquillin\nSenatoren: Ammon Valac, Rang Berserker | Rangrim Glutbart, Rang Admiral\n\nDivitia Maxima\nZustädigkeit: Finanzen und Steuern\nHauptsitz: Warcrest\nSenatoren: Aerith Jeb, Rang Arceus | Kairon Barakas, Rang Berserker\n\nInsomnis Vigilis\nZuständigkeit: Arkanes, Kunst und Geschichte\nHauptsitz: Aramore\nSenatoren: Mina Odion, Rang Arceus | Ishmaeal Zahid, Rang Arceus\n\nSaevus Aquidus\nZustädigkeit: Marine und Ozeanografie\nHauptsitz: Portus Fractus\nSenatoren: Railtun Vylrint, Rang Admiral | Balasar Blauschweif, Rang Admiral\n\nSangius Gladius\nZuständigkeit: Militär und Kampftechnologien\nHauptsitz: Garthram\nSenatoren: Ben Zokos, Rang Arceus | Talin Sala, Rang Berserker",
      },
    ],
  },
  {
    category: "Städte",
    topics: [{ name: "Solime", desc: "Solime ist ein ehemaliger Außenposten der Elfen, der vor ca. 70 Jahren von den meisten Elfen verlassen wurde. Aufgrund der elfischen Medizin kamen viele Menschen aus dem Feuerreich dort hin um sich behandeln zu lassen. Viele der Menschen blieben und gründet mit den Elfen ein neues Zuhause. Heute ist Solime die Technologische Hochburg von Demora, ein Paradies für Künstler, Tüftler und Erfinder. Dank der Gilde Astrada hat die Stadt eine neue Energiequelle entdeckt, welches Ihnen erlaubt neue Technologische Wunderwerke zu erschaffen." }],
  },
  {
    category: "Spieler Charakter",
    topics: [
      {
        name: "Benjamin J.",
        desc: "Backstory:\nGeboren in Erastin als Sohn von zwei Palatinischen Soldaten, ist er dort als Waise aufgewachsen. In jungen Jahren hat er sich mit Gängaktivitäten über Wasser gehalten, bis sich irgendwann ein berühmter Koch, Pagus Romano, sich Ben angenommen hat und ihn selbst zum Koch ausbildete. Ben sollte für ein besonderes Gericht ein Salek Frucht aus dem Nachtwald besorgen, dort fand er einen alten mysteriösen Altar, wo ihn eine Stimme die Macht von Atropus anbot. Durch die verpeiltheit von Ben nahm er dieses Angebot an und so nahm sein Schicksal eine andere Richtung ein. Kurz darauf traf er auf Ziora und machte sich auf die Reise die Welt zu erkunden.\nKlasse:\nPact of the Undying Warlock | Void (Homebrew) Sorcerer\nRasse: Mensch",
      },
      {
        name: "Gellea Felsenfaust",
        desc: "Backstory:\nGeboren in Khrain als Tochter von zwei Steinmetzen. Als der Konflikt zwischen dem Feuerreich und dem Palatinischen Imperium größer wurde, musste ihre Eltern in den Kriegsdienst eintreten und Gellea ging im Alter von zwölf Jahren zu ihrem Onkel Arrin. Vor den Auswirkungen des Krieges flüchtend, gingen sie von Stadt zu Stadt und glaubten sich eines Tages in der Zwergenstadt Coruscatio sicher zu sein. Dort erweckten sich verborgene Kräft in Gellea und wurde von Fanatikern entführt und gefangen genommen um an ihr zu experimentieren. Gellea verlor dabei ihr Gedächtnis und schaffte es dort eines Tages zu flüchten und traff danach auf Ben, Horizon und Lucardis.\nKlasse:\n Ancestral Guardian Barbarian\nRasse: Hügel Zwerg",
      },
      {
        name: "Horizon B105 (inaktiv)",
        desc: "Backstory:\n \nKlasse:\nCleric of the Forge | Circle of Spores Druid\nRasse:\nWarforged\nVerschwinden:\n Verschlungen von einem Sand Wurm in der Subarra.",
      },
      {
        name: "Lucardis Corinth (inaktiv)",
        desc: "Backstory:\n \nKlasse:\n Arcane Archer Fighter\nRasse:\nKalashtar\nVerschwinden:\nMusste ihren eigenen Weg gehen um ein Problem zu lösen.",
      },
      {
        name: "Zesa of the Suncoat",
        desc: "Backstory:\n \nKlasse:\nRune Knight Fighter | Shadow Sorcerer\nRasse:\nLeonin",
      },
      {
        name: "Ziora Akkhiato (inaktiv)",
        desc: "Backstory:\n \nKlasse:\nCircle of the Moon Druid\nRasse:\nWaldelf",
      },
    ],
  },
];
