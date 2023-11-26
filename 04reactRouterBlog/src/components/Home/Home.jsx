const Home = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center py-40 px-20">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold">
            Hi, my <span className="text-yellow-500">name</span> is
          </h2>
          <h1 className="text-6xl font-bold my-4">
            <span className="text-yellow-500">Sheharyar</span> Khalid.
          </h1>
          <p className="text-md w-[65ch] text-justify">
            When the Lord came to question Cain about Abel's murder, Cain
            explained that he was simply decolonizing his family's land. "What
            did you think decolonizing meant?" said Cain, waving to his
            brother's body. "This was my land before Abel showed up! For years
            now, I have been kept in this open-air prison, tilling the land
            while my brother got to travel around with the flocks. I have done
            nothing but throw off the shackles of the oppressor!"
          </p>
        </div>
        <div>
          <img
            className="w-[300px] rounded-full"
            src="https://e1.pxfuel.com/desktop-wallpaper/885/825/desktop-wallpaper-open-me-levi-ackerman-aot-pfp.jpg"
            alt="levi eating"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center mb-12 items-center">
        <img
          className=" rounded"
          src="https://e1.pxfuel.com/desktop-wallpaper/165/560/desktop-wallpaper-attack-on-titan-rumbling-aot-rumbling.jpg"
          alt="rumbbling"
        />
        <div className="w-[90ch] text-justify">
          <p className="my-4">
            During the final days of the Great Titan War between Marley and the
            Eldian Empire, King Karl Fritz used the power of the Founding Titan
            to raise three Walls on Paradis Island: Maria, Rose, and Sheena,
            each named for the three daughters of Ymir Fritz. These Walls were
            constructed from the hardened flesh of countless Colossal Titans
            created with the Founding Titan's power.
          </p>
          <p className="my-4">
            Upon gathering the remnants of the Eldian Empire into the Walls and
            closing the gates to the outside world, Karl Fritz issued one final
            declaration which assured the enemies of Eldia that if Paradis were
            to come under attack, the Founding Titan would unleash the Wall
            Titans to trample the earth into ruin.
          </p>
          <p className="my-4">
            However, Karl Fritz secretly confided with the Tybur family and the
            remaining Fritz family on the mainland that this ultimatum was an
            empty threat of deterrence. In truth, Karl Fritz made a "vow
            renouncing war" with the Founding Titan ensuring that none of his
            successors would use the Founding Titan to threaten the world again,
            allowing for Eldia to live in a brief paradise before their enemies
            would arrive to destroy Eldia as Karl Fritz believed they deserved
            to be.
          </p>
          <p className="my-4">
            As Karl Fritz had hoped, no open declaration of war or act of
            aggression was made against the people of the Walls for over a
            century, though Marley would use the lands beyond the Walls on
            Paradis Island as a penal colony for criminal or undesirable
            Subjects of Ymir transformed into Pure Titans. However, over eighty
            years after the end of the Great Titan War, Marley's declining
            military industry turned the nation's attention towards Paradis and
            the fossil fuels hidden beneath Eldian lands. Despite the vow
            renouncing war being known to Marley through the Tybur family, the
            threat of the rumbling was too great a risk to attempt a full scale
            invasion.
          </p>
          <p className="my-4">
            Instead, Marley began training the Warrior Unit in preparation for
            the Paradis Island Operation, an infiltration of the Walls with the
            power of the Titans that would not provoke the attention of the King
            of the Walls with military force. Likewise, the Eldian
            Restorationists led at this time by Grisha Yeager attempted to use
            this Warrior program to infiltrate the Walls in the same fashion in
            order to steal the Founding Titan to restore Eldia.
          </p>
          <p className="my-4">
            In the year 845, the power of the Attack Titan causes Grisha Yeager
            to inherit future memories from his son Eren, revealing the Fall of
            Wall Maria later that day. Grisha flees to the chapel of the Reiss
            family where he is influenced by the will of Eren in the distant
            future to steal the power of the Founding Titan and slaughter the
            Reiss family. The future memories of the Attack Titan reveal to
            Grisha the sight of the rumbling that Eren will create.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
