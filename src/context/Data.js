import { ADA, FlameAndSmoke, InteriorFittingsAndSurfaces, MobilityAidAccessibility, FloorPanelStrengthAndTesting } from "./Tier1Requirements/General";
import { Doorways, FloorPanels, Floors, InteriorCirculationHandrailsAndStanchions, Lighting, PublicInformationSystems, Restrooms, SleepingCompartments } from "./Tier1Requirements/Components"


const testData = {
    tier1: {
        general: [
            ADA,
            FlameAndSmoke,
            InteriorFittingsAndSurfaces,
            MobilityAidAccessibility,
            FloorPanelStrengthAndTesting 
        ],
        components: [
            Doorways, 
            FloorPanels, 
            Floors, 
            InteriorCirculationHandrailsAndStanchions, 
            Lighting, 
            PublicInformationSystems, 
            Restrooms, 
            SleepingCompartments,
        ] 
    }
}    
export default testData; 