import { fetchBoundingBox } from '../../services/osm-services';

export function getBoundingBox(left, bottom, right, top){
  return async (dispatch, getState) => {
		const osmData = await fetchBoundingBox(left, bottom, right, top);
    console.log(osmData);
  };
}