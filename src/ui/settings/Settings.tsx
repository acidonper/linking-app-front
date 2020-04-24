import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Settings.module.css";
import { Button } from "../../core/components/button/Button";
import { InputText } from "../../core/components/input/inputtext/InputText";
import { InputSelect } from "../../core/components/input/inputselect/InputSelect";
import { InputNumber } from "../../core/components/input/inputnumber/InputNumber";
import { User, emptyUser } from "../../domain/User";
import { cities } from "../../domain/Cities";
import { apiGetProfileSettings } from "../../infrastructure/profile/obtain";
import { apiModify } from "../../infrastructure/profile/modify";
import { InputSelectBoolean } from "../../core/components/input/inputselectboolean/InputSelectBoolean";

const cx = bind(styles);

export const Settings: React.FunctionComponent = ({}) => {
  let user: User = emptyUser;
  const [inputUser, setInputUser] = useState(user);

  const syncUserProfileSettings = async () => {
    const token: string = localStorage.getItem("token") + "";
    const userProfileSettings = await apiGetProfileSettings(token);
    setInputUser(userProfileSettings);
  };

  useEffect(() => {
    syncUserProfileSettings();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const token: string = localStorage.getItem("token") + "";
    const response = await apiModify(token, inputUser);
    if (typeof response !== "string") {
      alert("Error: Operation could not be completed. Please try again");
    } else {
      alert(response);
    }
  };

  return (
    <>
      <form
        data-testid="form"
        className={cx("container")}
        onSubmit={handleSubmit}
      >
        <div className={cx("container__main")}>
          <div className={cx("container__main__name")}>
            <InputText
              onChange={(data: string) =>
                setInputUser({ ...inputUser, name: data })
              }
              label="First Name"
              value={inputUser.name}
              required={true}
              type="text"
            />
          </div>
          <div className={cx("container__main__surname")}>
            <InputText
              onChange={(data: string) =>
                setInputUser({ ...inputUser, lastname: data })
              }
              label="Last Name"
              value={inputUser.lastname}
              required={true}
              type="text"
            />
          </div>
          <div className={cx("container__main__username")}>
            <InputText
              onChange={(data: string) =>
                setInputUser({ ...inputUser, username: data })
              }
              label="Username"
              value={inputUser.username}
              required={true}
              type="text"
              state="disabled"
            />
          </div>
          <div className={cx("container__main__email")}>
            <InputText
              onChange={(data: string) =>
                setInputUser({ ...inputUser, email: data })
              }
              label="Email"
              value={inputUser.email}
              required={true}
              type="email"
              state="disabled"
            />
          </div>
        </div>
        <div className={cx("container__options")}>
          <div className={cx("container__options__info")}>
            <h1>Information</h1>

            <InputSelect
              name={"City"}
              labels={cities}
              onChange={(data: User["infoCity"]) =>
                setInputUser({
                  ...inputUser,
                  infoCity: data,
                })
              }
              defaultValue={inputUser.infoCity}
            ></InputSelect>
            <InputSelect
              name={"Gender"}
              labels={["female", "male"]}
              onChange={(data: User["infoGender"]) =>
                setInputUser({
                  ...inputUser,
                  infoGender: data,
                })
              }
              defaultValue={inputUser.infoGender}
            ></InputSelect>
            <InputSelect
              name={"Education"}
              labels={["elementary", "highSchool", "university"]}
              onChange={(data: User["infoEducation"]) =>
                setInputUser({
                  ...inputUser,
                  infoEducation: data,
                })
              }
              defaultValue={inputUser.infoEducation}
            ></InputSelect>
            <InputSelect
              name={"Physical Condition"}
              labels={["thin", "fitness", "curvy"]}
              onChange={(data: User["infoPhysicalCondition"]) =>
                setInputUser({
                  ...inputUser,
                  infoPhysicalCondition: data,
                })
              }
              defaultValue={inputUser.infoPhysicalCondition}
            ></InputSelect>
            <InputSelect
              name={"Activity"}
              labels={["homeLover", "active", "energetic"]}
              onChange={(data: User["infoActivity"]) =>
                setInputUser({
                  ...inputUser,
                  infoActivity: data,
                })
              }
              defaultValue={inputUser.infoActivity}
            ></InputSelect>
            <InputSelect
              name={"Lifestyle"}
              labels={["working", "studying", "enjoying"]}
              onChange={(data: User["infoLifeStyle"]) =>
                setInputUser({
                  ...inputUser,
                  infoLifeStyle: data,
                })
              }
              defaultValue={inputUser.infoLifeStyle}
            ></InputSelect>
            <InputSelectBoolean
              name={"Kids Lover"}
              onChange={(data: User["infoKidsLover"]) =>
                setInputUser({
                  ...inputUser,
                  infoKidsLover: data,
                })
              }
              defaultValue={inputUser.infoKidsLover}
            ></InputSelectBoolean>
            <InputSelectBoolean
              name={"Pets Lover"}
              onChange={(data: User["infoPetsLover"]) =>
                setInputUser({
                  ...inputUser,
                  infoPetsLover: data,
                })
              }
              defaultValue={inputUser.infoPetsLover}
            ></InputSelectBoolean>
          </div>
          <div className={cx("container__options__prefs")}>
            <h1>Preferences</h1>
            <InputSelect
              name={"Cultural Interest"}
              labels={["low", "medium", "high"]}
              onChange={(data: User["prefCulturalInterest"]) =>
                setInputUser({
                  ...inputUser,
                  prefCulturalInterest: data,
                })
              }
              defaultValue={inputUser.prefCulturalInterest}
            ></InputSelect>
            <InputSelect
              name={"Sport Cadence"}
              labels={["low", "medium", "high"]}
              onChange={(data: User["prefSportCadence"]) =>
                setInputUser({
                  ...inputUser,
                  prefSportCadence: data,
                })
              }
              defaultValue={inputUser.prefSportCadence}
            ></InputSelect>
            <InputSelect
              name={"Travel Cadence"}
              labels={["low", "medium", "high"]}
              onChange={(data: User["prefTravelCadence"]) =>
                setInputUser({
                  ...inputUser,
                  prefTravelCadence: data,
                })
              }
              defaultValue={inputUser.prefTravelCadence}
            ></InputSelect>
            <InputSelect
              name={"Owl Or SkyLark"}
              labels={["owl", "skylark"]}
              onChange={(data: User["prefOwlOrSkyLark"]) =>
                setInputUser({
                  ...inputUser,
                  prefOwlOrSkyLark: data,
                })
              }
              defaultValue={inputUser.prefOwlOrSkyLark}
            ></InputSelect>
            <InputSelect
              name={"Sexual Preferences"}
              labels={["male", "female", "both"]}
              onChange={(data: User["prefSexualPreferences"]) =>
                setInputUser({
                  ...inputUser,
                  prefSexualPreferences: data,
                })
              }
              defaultValue={inputUser.prefSexualPreferences}
            ></InputSelect>
            <div className={cx("container__options__prefs__age")}>
              <label>Range of Age</label>
              <InputNumber
                onChange={(data: User["prefAgeMin"]) =>
                  setInputUser({
                    ...inputUser,
                    prefAgeMin: data,
                  })
                }
                label="Minimum Age"
                value={inputUser.prefAgeMin}
                required={true}
                min={18}
                max={65}
              />
              <InputNumber
                onChange={(data: User["prefAgeMax"]) =>
                  setInputUser({
                    ...inputUser,
                    prefAgeMax: data,
                  })
                }
                label="Maximum Age"
                value={inputUser.prefAgeMax}
                required={true}
                min={18}
                max={65}
              />
            </div>
          </div>
        </div>
        <div className={cx("container__button")}>
          <Button submit theme="form" text="Save Changes"></Button>
        </div>
      </form>
    </>
  );
};
