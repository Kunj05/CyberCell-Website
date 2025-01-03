const Map = () => {
  return (
    <div className="relative h-[504px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254644!2d73.84864847499455!3d18.45742598263271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sPune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1709058144621!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 pointer-events-none border border-blue-500/20 rounded-lg" />
    </div>
  );
};

export default Map;
