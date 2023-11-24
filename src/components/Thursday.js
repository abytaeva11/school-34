import React, { useEffect, useState } from "react";
import { useAppContext } from "../global/AppContext";
import "../App.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import muz1 from "../music/Мирбек Атабеков - Таласым.mp3";
import muz2 from "../music/Асылбек Насирдинов - Улуу көч.mp3";
import muz3 from "../music/кыргызский-оозкомуз_(muzmo.su).mp3";
import muz4 from "../music/нурак-комузкууу_(muzmo.su).mp3";
import muz5 from "../music/kyrgyzskaya-narodnaya-muzyka-esimde.mp3";
import "../components/DefaultValue.css";
import muz6 from "../music/kyrgyz_music_34.mp3";
import muz7 from "../music/Детская - Учат В Школе.mp3";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function Thursday({disableAudioDays, setDisableAudioDays}) {
  const {
    selectedAudio,
    currentTime,
    activeInput,
    disableAudio,
    audioRef,
    handleSelectChange,
    handleStopAudio,
    handleInputFocus,
    handleCheckboxChange,

    // disableAudioDays,

    handleDisableAudioChange,
    setActiveInput,
  } = useAppContext();

  const handleInputChange = (inputName, event) => {
    const { value } = event.target;
    setThursdayInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: value,
    }));
  };

  useEffect(() => {
    const savedInputs = localStorage.getItem("thursdayInputs");
    if (savedInputs) {
      setThursdayInputs(JSON.parse(savedInputs));
    }
  }, []);

  const [thursdayInputs, setThursdayInputs] = useState(() => {
    const savedInputs = localStorage.getItem("thursdayInputs");
    return savedInputs
      ? JSON.parse(savedInputs)
      : {
          input1: "08:30",
          input2: "09:15",
          input3: "09:20",
          input4: "10:05",
          input5: "10:10",
          input6: "10:55",
          input7: "11:05",
          input8: "11:50",
          input9: "11:55",
          input10: "12:40",
          input11: "12:45",
          input12: "13:30",
          input13: "13:35",
          input14: "14:20",
          input15: "14:25",
          input16: "15:10",
          input17: "15:20",
          input18: "16:05",
          input19: "16:10",
          input20: "16:55",
          input21: "17:00",
          input22: "17:45",
          input23: "17:50",
          input24: "18:35",
        };
  });

  useEffect(() => {
    localStorage.setItem("thursdayInputs", JSON.stringify(thursdayInputs));
  }, [thursdayInputs]);

  useEffect(() => {
    const currentDayOfWeek = daysOfWeek[new Date().getDay()];
    if (currentDayOfWeek === "Thursday") {
      const inputs = document.querySelectorAll("input[type='time']");
      inputs.forEach((input, index) => {
        if (input.value === currentTime && !disableAudio && !disableAudioDays.thursday) {
          setActiveInput(index);
          if (selectedAudio) {
            handlePlayAudio(selectedAudio);
            setTimeout(handleStopAudio, 60000);
          }
        }
      });
    }
  }, [currentTime, selectedAudio, disableAudio, disableAudioDays.thursday]);
  const handlePlayAudio = (audioFile) => {
    audioRef.current.src = audioFile;
    audioRef.current.play();
  };
  return (
    <div>
      <center>
        <div className="card">
          <p className="card__name">
            {currentTime && <h2 className="title">{currentTime}</h2>}
            <h3 className="subtitle">Четверг</h3>
          </p>
          <select
            style={{
              background: "white",
              color: "black",
              padding: "5px 10px",
              border: "none",
              position: "absolute",
              marginLeft: "-498px",
              marginTop: "75px",
            }}
            onChange={handleSelectChange}
            value={selectedAudio}
          >
            <option value="">Выберите аудио</option>

            <option value={muz1}>Аудио 1</option>
            <option value={muz2}>Аудио 2</option>
            <option value={muz3}>Аудио 3</option>
            <option value={muz4}>Аудио 4</option>
            <option value={muz5}>Аудио 5</option>
            <option value={muz6}>Аудио 6</option>
            <option value={muz7}>Аудио 7</option>
          </select>
          <div className="ParentValue">
            <div className="defaultValue">
              <h3
                style={{
                  margin: "10px 0",
                }}
              >
                1-смена
              </h3>
              <div className="">
                <div className="">
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input1}
                      onFocus={() => handleInputFocus(0)}
                      onChange={(e) => handleInputChange("input1", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input2}
                      onFocus={() => handleInputFocus(1)}
                      onChange={(e) => handleInputChange("input2", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input3}
                      onFocus={() => handleInputFocus(2)}
                      onChange={(e) => handleInputChange("input3", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input4}
                      onFocus={() => handleInputFocus(3)}
                      onChange={(e) => handleInputChange("input4", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input5}
                      onFocus={() => handleInputFocus(4)}
                      onChange={(e) => handleInputChange("input5", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input6}
                      onFocus={() => handleInputFocus(5)}
                      onChange={(e) => handleInputChange("input6", e)}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input7}
                      onFocus={() => handleInputFocus(6)}
                      onChange={(e) => handleInputChange("input7", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input8}
                      onFocus={() => handleInputFocus(7)}
                      onChange={(e) => handleInputChange("input8", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input9}
                      onFocus={() => handleInputFocus(8)}
                      onChange={(e) => handleInputChange("input9", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input10}
                      onFocus={() => handleInputFocus(9)}
                      onChange={(e) => handleInputChange("input10", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input11}
                      onFocus={() => handleInputFocus(10)}
                      onChange={(e) => handleInputChange("input11", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input12}
                      onFocus={() => handleInputFocus(11)}
                      onChange={(e) => handleInputChange("input12", e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="defaultValue">
              <h3
                style={{
                  margin: "10px 0",
                }}
              >
                2-смена
              </h3>
              <div className="parentGrid">
                <div className="">
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input13}
                      onFocus={() => handleInputFocus(12)}
                      onChange={(e) => handleInputChange("input13", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input14}
                      onFocus={() => handleInputFocus(13)}
                      onChange={(e) => handleInputChange("input14", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input15}
                      onFocus={() => handleInputFocus(14)}
                      onChange={(e) => handleInputChange("input15", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input16}
                      onFocus={() => handleInputFocus(15)}
                      onChange={(e) => handleInputChange("input16", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input17}
                      onFocus={() => handleInputFocus(16)}
                      onChange={(e) => handleInputChange("input17", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input18}
                      onFocus={() => handleInputFocus(17)}
                      onChange={(e) => handleInputChange("input18", e)}
                    />
                  </div>
                </div>
                <div className="parentGrid">
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input19}
                      onFocus={() => handleInputFocus(18)}
                      onChange={(e) => handleInputChange("input19", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input20}
                      onFocus={() => handleInputFocus(19)}
                      onChange={(e) => handleInputChange("input20", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input21}
                      onFocus={() => handleInputFocus(20)}
                      onChange={(e) => handleInputChange("input21", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input22}
                      onFocus={() => handleInputFocus(21)}
                      onChange={(e) => handleInputChange("input22", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input23}
                      onFocus={() => handleInputFocus(22)}
                      onChange={(e) => handleInputChange("input23", e)}
                    />
                    <input
                      type="time"
                      defaultValue={thursdayInputs.input24}
                      onFocus={() => handleInputFocus(23)}
                      onChange={(e) => handleInputChange("input24", e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <audio ref={audioRef} />
          {selectedAudio && activeInput !== null && (
            <button
              style={{
                margin: "5px 0 ",
                fontSize: "18px",
                color: "white",
                background: "blue",
                padding: "5px 20px",
                borderRadius: "14px",
              }}
              onClick={handleStopAudio}
            >
              Остановить аудио
            </button>
          )}
          <input
            style={{
              width: "20px",
              height: "20px",
              border: "2px solid blue",
            }}
            type="checkbox"
            checked={disableAudioDays.thursday}

            onChange={() => {
          handleCheckboxChange("thursday");
          setDisableAudioDays((prevDays) => ({
            ...prevDays,
            thursday: !prevDays.thursday,
          }));
        }}

          />
          <label
            style={{
              margin: "5px 0 ",
              fontSize: "18px",
              background: "red",
              padding: "5px 20px",
              borderRadius: "14px",
            }}
          >
            Disable Audio
          </label>
        </div>
      </center>
    </div>
  );
}

export default Thursday;
