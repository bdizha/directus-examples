import { a as useDirectus } from './server.mjs';

const useDirectusItems = () => {
  const directus = useDirectus();
  const getItems = async (data) => {
    var _a, _b;
    if ((_a = data.params) == null ? void 0 : _a.filter) {
      data.params.filter = JSON.stringify(data.params.filter);
    }
    if ((_b = data.params) == null ? void 0 : _b.deep) {
      data.params.deep = JSON.stringify(data.params.deep);
    }
    const items = await directus(`/items/${data.collection}`, {
      method: "GET",
      params: data.params
    });
    if (items.meta) {
      return { meta: items.meta, data: items.data };
    } else {
      return items.data;
    }
  };
  const getSingletonItem = async (data) => {
    var _a, _b;
    if ((_a = data.params) == null ? void 0 : _a.filter) {
      data.params.filter = JSON.stringify(data.params.filter);
    }
    if ((_b = data.params) == null ? void 0 : _b.deep) {
      data.params.deep = JSON.stringify(data.params.deep);
    }
    const items = await directus(`/items/${data.collection}`, {
      method: "GET",
      params: data.params
    });
    return items.data;
  };
  const getItemById = async (data) => {
    var _a, _b;
    if ((_a = data.params) == null ? void 0 : _a.filter) {
      data.params.filter = JSON.stringify(data.params.filter);
    }
    if ((_b = data.params) == null ? void 0 : _b.deep) {
      data.params.deep = JSON.stringify(data.params.deep);
    }
    const items = await directus(`/items/${data.collection}/${data.id}`, {
      method: "GET",
      params: data.params
    });
    return items.data;
  };
  const createItems = async (data) => {
    const items = await directus(`/items/${data.collection}`, {
      method: "POST",
      body: data.items
    });
    return items.data;
  };
  const deleteItems = async (data) => {
    await directus(`/items/${data.collection}`, {
      method: "DELETE",
      body: data.items
    });
  };
  const updateItem = async (data) => {
    const item = await directus(`/items/${data.collection}/${data.id}`, {
      method: "PATCH",
      body: data.item
    });
    return item.data;
  };
  return {
    getItems,
    getSingletonItem,
    getItemById,
    createItems,
    deleteItems,
    updateItem
  };
};

export { useDirectusItems as u };
//# sourceMappingURL=useDirectusItems-f15604bd.mjs.map
