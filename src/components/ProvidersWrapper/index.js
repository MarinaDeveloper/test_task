import React, {useState, useContext, useEffect} from 'react';
import { Grid } from '@mui/material';
import { Context } from 'components/App';

import ProviderItem from 'components/ProviderItem';

import iconBack from 'assets/image/backblaze.png';
import iconBunny from 'assets/image/bunny.png';
import iconScaleway from 'assets/image/scaleway.webp';
import iconVultr from 'assets/image/vultr.webp';

const ProviderWrapper = () => {
    const {storage, transfer} = useContext(Context);

    const [minValue, setMinValue] = useState(0);

    const [sumBackblaze, setSumBackblaze] = useState(7);
    const [sumBunny, setSumBunny] = useState(6);
    const [sumScaleway, setSumScaleway] = useState(18);
    const [sumVultr, setSumVultr] = useState(6);

    const [switchBunny, setSwitchBunny] = useState("HDD");
    const [switchScal, setSwitchScal] = useState("Multi");

    const handleSwitchBunny = type => {
        setSwitchBunny(type);
    }
    const handleSwitchScaleway = type => {
        setSwitchScal(type);
    }

    useEffect(() => {
        const backblaze = (0.005 * storage + 0.01 * transfer).toFixed(2);
        backblaze >= 7 ? setSumBackblaze(backblaze) : setSumBackblaze(7);

        const bunny = ((switchBunny === 'HDD' ? 0.01 : 0.02) * storage + 0.01 * transfer).toFixed(2);
        bunny > 10 ? setSumBunny(10) : setSumBunny(bunny);

        const scaleway = ((switchScal === 'Multi' ? 0.06 : 0.03) * (storage > 75 ? storage - 75 : 0) + 0.02 * (transfer > 75 ? transfer - 75 : 0)).toFixed(2);
        setSumScaleway(scaleway);

        const vultr = (0.01 * storage + 0.01 * transfer).toFixed(2);
        vultr >= 5 ? setSumVultr(vultr) : setSumVultr(5);

    }, [storage, transfer, switchBunny, switchScal])

    useEffect(() => {
        const arr = [sumBackblaze, sumBunny, sumScaleway, sumVultr];
        setMinValue(arr.sort((a,b) => a - b)[0])
    }, [sumBackblaze, sumBunny, sumScaleway, sumVultr])


    function RadioGroup (type, value1, value2) {
        this.type = type;
        this.value1 = value1;
        this.value2 = value2;
    }

    return (
        <Grid container rowSpacing={3}>
            <ProviderItem
                title={"Backblaze"}
                total={sumBackblaze}
                icon={iconBack}
                minValue={minValue}
            />
            <ProviderItem
                title={"Bunny"}
                total={sumBunny}
                icon={iconBunny}
                minValue={minValue}
                switcher={new RadioGroup(true, "HDD", "SSD")}
                onChange={handleSwitchBunny}
            />
            <ProviderItem
                title={"Scaleway"}
                total={sumScaleway}
                icon={iconScaleway}
                minValue={minValue}
                switcher={new RadioGroup(true, "Multi", "Single")}
                onChange={handleSwitchScaleway}
            />
            <ProviderItem
                title={"Vultr"}
                total={sumVultr}
                icon={iconVultr}
                minValue={minValue}
            />
        </Grid>
    );
}

export default ProviderWrapper;