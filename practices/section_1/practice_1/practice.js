function collect_same_elements(collection_a, collection_b) {
  var result = [];

  collection_a.forEach(function (a_item) {

    if (is_existed_item(a_item, collection_b)) {
      result.push(a_item);
    }
  });

  return result;
}

function is_existed_item(a_item, collection) {
  var is_existed = false;

  collection.forEach(function (item) {
    if (item === a_item) {
      is_existed = true;
    }
  });

  return is_existed;
}

module.exports = collect_same_elements;
