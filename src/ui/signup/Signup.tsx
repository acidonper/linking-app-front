import React, { useState } from "react";
import { bind } from "../../utils/bind";
import styles from "./Signup.module.css";
import { Button } from "../../core/components/button/Button";
import { InputText } from "../../core/components/input/inputtext/InputText";
import { InputPass } from "../../core/components/input/inputpassword/InputPass";
import { InputNumber } from "../../core/components/input/inputnumber/InputNumber";
import { InputSelect } from "../../core/components/input/inputselect/InputSelect";
import { InputSelectBoolean } from "../../core/components/input/inputselectboolean/InputSelectBoolean";
import { User } from "../../domain/User";
import { cities } from "../../domain/Cities";

const cx = bind(styles);

interface Props {
  title: string;
  text: string;
  close(): void;
  submit(inputUser: User): void;
}

export const Signup: React.FunctionComponent<Props> = ({
  title,
  text,
  close,
  submit,
}) => {
  let user: User = {} as any;

  const [inputUser, setInputUser] = useState(user);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await submit(inputUser);
    if (typeof response !== "string") {
      alert("Error: Operation could not be completed. Please try again");
    } else {
      alert(response);
      setTimeout(() => {
        close();
      }, 1000);
    }
  };

  return (
    <>
      <div className={cx("title")}>{title}</div>
      <form
        data-testid="form"
        className={cx("container")}
        onSubmit={handleSubmit}
      >
        <div className={cx("container__main")}>
          <InputText
            onChange={(data: string) =>
              setInputUser({ ...inputUser, name: data })
            }
            label="First Name"
            value={inputUser.name}
            required={true}
            type="text"
          />
          <InputText
            onChange={(data: string) =>
              setInputUser({ ...inputUser, lastname: data })
            }
            label="Last Name"
            value={inputUser.lastname}
            required={true}
            type="text"
          />
          <InputText
            onChange={(data: string) =>
              setInputUser({ ...inputUser, username: data })
            }
            label="Username"
            value={inputUser.username}
            required={true}
            type="text"
          />
          <InputText
            onChange={(data: string) =>
              setInputUser({ ...inputUser, email: data })
            }
            label="Email"
            value={inputUser.email}
            required={true}
            type="email"
          />
          <InputPass
            onChange={(data) => setInputUser({ ...inputUser, password: data })}
            label="Password"
            value={inputUser.password}
            required={true}
            security={true}
          />
        </div>
        <div className={cx("container__options")}>
          <div className={cx("container__options__info")}>
            <h1>Information</h1>
            <div className={cx("container__options__info__age")}>
              <InputNumber
                onChange={(data: User["infoAge"]) =>
                  setInputUser({
                    ...inputUser,
                    infoAge: data,
                  })
                }
                label="Age"
                value={inputUser.infoAge}
                required={true}
                min={18}
                max={65}
              />
            </div>
            <InputSelect
              name={"Gender"}
              labels={["female", "male"]}
              onChange={(data: User["infoGender"]) =>
                setInputUser({
                  ...inputUser,
                  infoGender: data,
                })
              }
              defaultValue={inputUser.infoCity}
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
            ></InputSelect>
            <InputSelect
              name={"City"}
              labels={cities}
              onChange={(data: User["infoCity"]) =>
                setInputUser({
                  ...inputUser,
                  infoCity: data,
                })
              }
            ></InputSelect>
            <InputSelectBoolean
              name={"Kids Lover"}
              onChange={(data: User["infoKidsLover"]) =>
                setInputUser({
                  ...inputUser,
                  infoKidsLover: data,
                })
              }
            ></InputSelectBoolean>
            <InputSelectBoolean
              name={"Pets Lover"}
              onChange={(data: User["infoPetsLover"]) =>
                setInputUser({
                  ...inputUser,
                  infoPetsLover: data,
                })
              }
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
                label="Minimum"
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
                label="Maximum"
                value={inputUser.prefAgeMax}
                required={true}
                min={18}
                max={65}
              />
            </div>
          </div>
        </div>
        <div className={cx("container__button")}>
          <Button submit theme="form" text={text}></Button>
          <Button theme="form" text="Close" onClick={close}></Button>
        </div>
      </form>
    </>
  );
};
