import protobufjs from 'protobufjs';

export function createPbRoot() {
    const pbRoot = new protobufjs.Root();

    pbRoot.resolvePath = (origin, target) => {
        const targets = target.split('/');

        switch (targets[0]) {
            case 'google': {
                switch (targets[1]) {
                    case 'protobuf': {
                        return `./node_modules/protobufjs/${target}`;
                    }
                    default: {
                        return `./cloudapi/third_party/googleapis/${target}`;
                    }
                }
            }
            case 'third_party': {
                return `./cloudapi/${target}`;
            }
            case 'yandex': {
                return `./cloudapi/${target}`;
            }
            default: {
                return target;
            }
        }
    };
    return pbRoot;
}
