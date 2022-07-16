export type Event = {
  title: string;
  date: string;
  timeSpan?: string;
  desc: string;
  place?: string;
};

export const historyEventData: Event[] = [
  {
    title: "Prime Ordnung",
    date: "40.000 b.D\n(before Divinity)",
    timeSpan: undefined,
    place: undefined,
    desc: "Chaos ist was die Welt, bevor sie eine Entität namens Telos fand, am besten beschreibt. Elementares Chaos beherrschte die Welt, Stürme, Tsunamis, Vulkane und Erdbeeben, formten die Welt im Stundentakt um. Telos bändigte das Elementare Chaos und erschaffte die ersten Titanen die für eine Ordnung sorgten und so konnte die Welt aufblühen und sich entfalten. Diese Titanen bennanten ihre Heimat zu ehren ihres Schöpfers, Telos.",
  },
  {
    title: "Himmlischer Einfall",
    date: "1 a.D (after Divinity)",
    timeSpan: undefined,
    place: undefined,
    desc: "Bei ihrer Reise durch den Astralen Ozean fanden die Götter ein Juwel, die Welt von Telos, ein perfekter Ort für sie und ihre Schöpfungen. Die Götter wollten sich die Welt mit den Titanen teilen und waren der Meinung das Telos genug platz für alle hat. Doch unter einigen Göttern war dies nie genug und ein katastophaler Konflikt bahnte sich an.",
  },
  {
    title: "Sanctus Bellum",
    date: "50 a.D",
    timeSpan: "100 Jahre",
    place: undefined,
    desc: "Der Frieden zwischen den Götter und den Titanen sollte nicht für lange sein. Besonders die Götter aus dem unteren moralischen Spektrum wollte sich die Welt nicht mit, aus ihren Augen Abschaum teilen. Die Götter, welche die Einstellung ihrer Geschwister nicht teilten, entschieden sich trotz dessen sich ihres Gleichen anzuschließen. Und so begann der Krieg, zwischen den mächtigsten Wesen die diese Welt je gesehen hat, der entscheidet wer in der Welt von Telos für sich gewinnt.",
  },
  {
    title: "Elementare Planes",
    date: "150 a.D",
    desc: "Obwohl die Götter der macht der Titanen nicht gewachsen waren, konnten diese mit ihrer strategischen Kriegführung den Kampf und Telos für sich gewinnen. Die Titanen welche nicht getötet werden konnten wurden auf die Elemental Planes verbannt und deren Kraft dazu genutzt das Elementare Chaos der Welt in schach zu halten.",
  },
  { title: "Arkanes Zeitalter", date: "500 a.D", desc: "Die Schöpfungen der Götter erbauten Zivilisationen, welche ihres Gleichen suchten. Es entand ein Zeitalter das vor magischen und technischen Innovationen und Fortschritt geprägt ist. Doch aus diesen Wunderwerken wurde schnell ein Wettrüsten der Zivilisationen um sich vor potenziellen Gefahren zu schützen. Auch zwischen den Göttern braut sich langsam ein Konflikt an, der für die größte Katastrophe sorgen soll den diese Welt je sehen wird." },
  { title: "Kataklysmus", date: "1500 a.D", desc: "Der Konflikt zwischen den \"guten\" und den \"bösen\" Göttern erreicht seinen Höhepunkt und auch die Konflikte zwischen den Zivilisationen brodelt über, was zu einem fast weltvernichtenden Krieg führt. In dieser Zeit wurde viele mächtige Artefakte von den Göttern hergestellt um ihre Anhänger in ihren Kriegen zu unterstützen die anderen Götter indirekt zu schwächen.", timeSpan: "100 Jahre" },
  { title: "Lazarus Blockade", date: "1600 a.D", desc: "Der Krieg ist vorbei. Fast 80% aller Lebewesen sind dem Krieg zum opfer gefallen, die \"guten\" Gottheiten siegten und verbannten die anderen Götter in ihre eigenen Planes. Doch auch unter den überlebenden Bewohnern der Welt gab es einige mächtige Arkanisten, unter ihnen Lazarus der vielleicht mächtigste Arkanist den es je geben wird. Er entwickelte einen Zauber der alle Götter von Telos aussperrt, damit sich eine solche Katastrophe niemals wiederholen wird, denn ohne den direkten Einfluss der Götter geht eine Menge an Magie und Potenzial verloren. Doch der Zauber von Lazarus kostet ihn und viele weiter Magier das leben, doch es ist ein Opfer das sie bereit sind zu erbringen. Nun kann kein Gott mehr Telos direkt betreten und nur kleiner Mengen an Macht an seine Anhänger weitergeben. " },
  { title: "Neue Titanen", date: "200 a.L (after Lazarus)", desc: "Durch die permanente Abwesenheit der Götter fließt nach und nach immer mehr Aether, die Macht der Titanen, über die Verbindungen der Elementaren Planes nach Telos. Was zur Erschaffung neuer Titanen führt doch in anderer Form als die ersten Titanen es waren. Sie lebten unter der Bewohnern und neu aufblühenden Dörfern und Städten nach dem Kataklysmus. Einige von den neuen Titanen hinterließen bleibende Eindrücke, so wurde ein ganzes Reich nach der Titanin Salona geführt.",},
  { title: "Asche Fall", date: "400 a.L", desc: "Durch Experimente mit Aether gelangen es Arkanisten aus dem Feuerreich eine Kreatur zu erschaffen, welche das Reich zu großem Ruhm führen sollte, doch es führte zum größten Fehler in der Geschichte des Feuerreiches. Die Kreatur geriet außer Kontrolle und zerstörte einen groß Teil des nördlichen Feuerreichs und die gesammte Borras Region und hüllte diese in Asche ein.", place: "Feurerreich/Borras Region" },
  {
    title: "Palatin erhebt sich",
    date: "500 a.L",
    place: "Demora",
    desc: "Colton Lacrius, der letzte König von Palatin, beendete die köngliche Herrschaft, in dem er Emery Decia, die Befehlshaberin des Militärapparats die Macht übergab. Er wollte das die Stärkste Person das Volk führt. Mit diesem Kodex begann die Ausbreitung des Palatinschen Reiches und durch die militärische Überlegenheit wurde andere Städte und Dörfer entwede einfach überrant oder schließen sich ohne Gegenwehr dem neuen Imperium an.",
  },
  {
    title: "Dunkle Sonne",
    date: "11. Kythorn 876",
    desc: "Dunkle Mächte sorgten dafür das die Sonne und der Mond still standen, auf dem Kontinent Thracian führte dies dazu, dass dort eine Sonnenfinsternis breit machte und die Temperatur rapide absinkte. Eine Gruppe von Abenteurern, war diesen Mächten mit der Hilfe eines Silbernen Drachens bereits auf der Spur und schafften es nach dem Kampf gegen zwei Schwarze Drachen die Dunklen Mächte dazu zu bringen die Himmelskonstellation wieder ihren gewohnten lauf nehmen zu lassen.",
    place: "Thracian",
  },
  {
    title: "Feuriger Stahl",
    date: "1072 a.L",
    place: "Demora",
    timeSpan: "5 Jahre",
    desc: "Auf Demora kristallisierten sich mit der Zeit die großen Nationen des Kontinents herraus. Zwischen ihnen herrschte größten Teils frieden, doch Palatin und das Feuerreich gerieten immer wieder in einen Konflikt. Dieser führte zu einem Krieg in Zentrum von Demora, unter dem Gebirge des Titanen Rückens.",
  },
  {
    title: "Frieden zwischen Feuer und Stahl",
    date: "1077 a.L",
    desc: "Der Krieg wurde beendet, nach dem beide Parteien realisiert haben das ihr Krieg mehr Schaden anrichtet als er ihnen nutzt. Dieser Krieg war so intensiv an magischer Kriegsführung das im gesammten Kriegsgebiet die Magischen Partikel aufgebraucht sind und dort keine Magie mehr genutzt werden kann.",
    place: "Demora",
  },
  {
    title: "Beginn der Stone Garden Campaign",
    date: "15. Pharast 1107",
    desc: "",
    place: "Capsan, Demora",
  },
];
