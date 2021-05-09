
import {SVG_LOADED , SVG_UNLOADED ,SVG_CLICK} from '../../Constants'

export const SvgLoaded = () => {
    return {
        type :SVG_LOADED
    }
}

export const SvgUnLoaded = () => {
    return {
        type : SVG_UNLOADED
    }
}

export const SvgClick = (objectId) => {
    return {
        type : SVG_CLICK,
        data :objectId
    }

}