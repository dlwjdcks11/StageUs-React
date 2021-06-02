const deviceSizes:any = {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
};

const device:object = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme:object = {
    device
};

export default theme;