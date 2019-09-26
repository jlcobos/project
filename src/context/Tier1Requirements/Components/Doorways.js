import React from "react";
import Link from "../../../components/Link";
import { testLink } from "../../Links"
import { exportSpecifier } from "@babel/types";

export const Doorways =  {
    name: "Doorways",
    displayName: "Door Requirements",
    param: "doorways",
    subTitle: "Doors: 38.113  (Including vestibule doors)",
    paragraphs: [
        {text: <p><a href={`${testLink.link}`}>{`${testLink.displayName}`}</a> (Including vestibule doors)</p>},
        {text: <p>{`(a) Clear width. (1) At least one doorway, on each side of the car from which passengers board, of each car required to be accessible by link="id_38111"§38.111(a) and where the spaces required by §38.111(d) of this part are located, and at least one adjacent doorway into coach passenger compartments shall have a minimum clear opening width of 32 inches.`}</p>},
        {text: <p>{`ENTER PRIIA REQUIREMENTS HERE!!!!`}</p>},
        {text: <p>{`(2) Doorways at ends of cars connecting two adjacent cars, to the maximum extent practicable in accordance with regulations issued under the Federal Railroad Safety Act of 1970 (49 CFR parts <link="id_229"><color=blue>229 and link="id_231" 231), shall have a clear opening width of 32 inches to permit wheelchair and mobility aid users to enter into a single-level dining car, if available.`}</p>},
        {text: <p>{`(b) Passageway. Doorways required to be accessible by paragraph (a) of this section shall permit access by persons using mobility aids and shall have an unobstructed passageway at least 32 inches wide leading to an accessible sleeping compartment complying with <link="id_38127"><color=blue>§38.127</color></link> of this part or seating locations complying with <link=id_38125><color=blue>§38.125(d)</color></link> of this part. In cars where such doorways require passage through a vestibule, such vestibule shall have a minimum width of 42 inches.)(see Fig. 4)</color></link>`}</p>},
        {text: <p>{`(c) Signals. If doors to the platform close automatically or from a remote location, auditory and visual warning signals shall be provided to alert passengers of closing doors.`}</p>},
        {text: <p>{`(d) Coordination with boarding platforms—(1) Requirements. Cars which provide level-boarding in stations with high platforms shall be coordinated with the boarding platform or mini-high platform design such that the horizontal gap between a car at rest and the platform shall be no greater than 3 inches and the height of the car floor shall be within plus or minus 5⁄8 inch of the platform height. Vertical alignment may be accomplished by car air suspension, platform lifts or other devices, or any combination.`}</p>},
        {text: <p>{`(2) Exception. New cars operating in existing stations may have a floor height within plus or minus 11⁄2 inches of the platform height.`}</p>},
        {text: <p>{`(3) Exception. Where platform set-backs do not allow the horizontal gap or vertical alignment specified in paragraph (d) (1) or (2), platform or portable lifts complying with <link="id_38125"><color=blue>§38.125(b)</color></link> of this part, or car or platform bridge plates, complying with <link="id_38125"><color=blue>§38.125(c)</color></link> of this part, may be provided ensuring compliance with section <link="id_3742"><color=blue>37.42</color></link>, where applicable.`}</p>},
        {text: <p>{`(4) Exception. Retrofitted vehicles shall be coordinated with the platform in existing stations such that the horizontal gap shall be no greater than 4 inches and the height of the vehicle floor, under 50% passenger load, shall be within plus or minus 2 inches of the platform height.`}</p>},
        {text: <p>{`(e) Signage. The International Symbol of Accessibility shall be displayed on the exterior of all doors complying with this section unless all cars and doors are accessible and are not marked by the access symbol <link="id_fig6"><color=blue>(see fig. 6)</color></link>. Appropriate signage shall also indicate which accessible doors are adjacent to an accessible restroom, if applicable`}</p>}
    ]
}