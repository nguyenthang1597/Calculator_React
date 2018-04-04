import operate from './operate'
import isNumber from './isNumber';
export default (state, buttonName) => {
    if (buttonName === 'AC') {
        return {
            total: null,
            first: null,
            second: null,
            operation: null,
        }
    }
    if (isNumber(buttonName)) {
        if (buttonName === '0' && state.first === '0')
            return {};
        if (state.operation) {
            if (state.second)
                return { second: state.second + buttonName };
            return { second: buttonName };
        }
        if (state.first) {
            return { first: state.first + buttonName }
        }
        return { first: buttonName }
    }
    if (buttonName === '.') {
        if (state.operation) {
            if (state.second) {
                if (state.second.includes('.'))
                    return {};
                return { second: state.second + '.' };
            }
            return { second: '0.' }
        } else {
            if (state.first) {

                if (state.first.includes('.')) {

                    return {};
                }

                return { first: state.first + '.' };
            }
            return { first: '0.' }
        }
    }
    if (buttonName === '=') {
        if (state.second && state.operation) {
            return {
                total: operate(state.first, state.second, state.operation),
            }
        }
        else
            return {};
    }
    if (buttonName === "+/-") {
        if (state.second)
            return { second: (-1 * parseFloat(state.second)).toString() };
        if(state.first)
            return { first: (-1 * parseFloat(state.first)).toString() };
        return {};
    }
    if(state.first && state.second && state.operation && state.total){
        return {
            first: state.total,
            second: null,
            total: null,
            operation: buttonName
        }
    }
    if (state.first) {
        return { operation: buttonName };
    }
}