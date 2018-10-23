export const getAdvertSuccess = {
    status: 200,
    statusText: 'OK',
    data: {
        advText: 'MOJE ZAJEBISTE OGŁOSZENIE !',
        coachType: 'bodybuilder',
        description:
            'Pellentesque pellentesque sed metus sed bibendum. Aliquam erat volutpat. Suspendisse ut lectus velit. Integer cursus nulla quis velit sagittis, vitae aliquet eros rutrum. Vivamus ac erat ac nulla luctus accumsan sed quis neque. Pellentesque aliquet rhoncus tellus, convallis porttitor lorem laoreet vel. Quisque orci neque, euismod eget rhoncus sit amet, mollis vel sem. Suspendisse id nisl vel felis fermentum scelerisque at vel magna. Curabitur in orci eu dui hendrerit suscipit nec scelerisque nibh. Etiam facilisis justo tristique augue posuere, sit amet aliquam lorem tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla id ligula ut sapien fermentum tristique ut sed metus. Nunc eu enim eu dolor malesuada aliquam.',
    },
};

export const getAdvertFail = {
    error: {
        message: `Can't get advertisement.`,
    },
};

export const getAdvertByUserIdSuccess = getAdvertSuccess;
export const getAdvertByUserIdFail = getAdvertFail;

export const getAllAdvertsSuccess = {
    status: 200,
    statusText: 'OK',
    data: [
        {
            advText: 'MOJE ZAJEBISTE OGŁOSZENIE !',
            coachType: 'bodybuilder',
            description:
                'Pellentesque pellentesque sed metus sed bibendum. Aliquam erat volutpat. Suspendisse ut lectus velit. Integer cursus nulla quis velit sagittis, vitae aliquet eros rutrum. Vivamus ac erat ac nulla luctus accumsan sed quis neque. Pellentesque aliquet rhoncus tellus, convallis porttitor lorem laoreet vel. Quisque orci neque, euismod eget rhoncus sit amet, mollis vel sem. Suspendisse id nisl vel felis fermentum scelerisque at vel magna. Curabitur in orci eu dui hendrerit suscipit nec scelerisque nibh. Etiam facilisis justo tristique augue posuere, sit amet aliquam lorem tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla id ligula ut sapien fermentum tristique ut sed metus. Nunc eu enim eu dolor malesuada aliquam.',
        },
        {
            advText: 'MOJE drugie zajebiste OGŁOSZENIE !',
            coachType: 'runner',
            description:
                'Vestibulum mauris magna, euismod quis maximus eu, egestas quis augue. Ut bibendum efficitur suscipit. Cras viverra elit urna, eget dapibus nisl cursus ut. Nunc et purus commodo, semper metus sed, imperdiet quam. Maecenas metus lacus, tristique vitae vulputate nec, luctus quis urna. Nam dapibus luctus quam, imperdiet imperdiet elit euismod ac. Vivamus nec consequat augue. Sed rutrum ornare velit vitae tempor. Cras ut felis id nunc auctor tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non iaculis neque, vel semper odio. Etiam tempor ipsum at metus finibus pulvinar. Aenean iaculis orci ac libero ornare, quis eleifend tortor consequat. Donec vitae mauris auctor dolor convallis tincidunt. Sed pharetra non ex ut tristique. Suspendisse gravida metus non dolor fermentum vestibulum.',
        },
        {
            advText: 'moje trzecie zajebiste ogloszenie !',
            coachType: 'runner',
            description: 'cos tam',
        },
    ],
};

export const getAllAdvertsFail = getAdvertFail;

export const addAdvertSuccess = {
    status: 200,
    statusText: 'OK',
    data: {},
};

export const addAdvertFail = {
    error: {
        message: `Can't add advertisement.`,
    },
};
