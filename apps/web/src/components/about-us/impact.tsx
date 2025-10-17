export default function Impact() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 px-4">
      <ImpactComponent main="+10" desc="No. of Youth reached" />
      <ImpactComponent main="+60" desc="Applications supported" />
      <ImpactComponent main="1 year" desc="Duration" />
    </div>
  );
}

function ImpactComponent({ main, desc }: { main: string; desc: string }) {
  return (
    <div className="bg-navy/10 font-archivo py-5 md:py-10 rounded-xl text-center">
      <p className="font-bold text-4xl leading-loose text-navy">{main}</p>
      <p className="text-lg text-navy/80">{desc}</p>
    </div>
  );
}
