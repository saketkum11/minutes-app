import React from "react";
import { useFilter } from "../../Context/Filter-Context/Filter-Context";

function Filter() {
  const { filterState, filterDispatch } = useFilter();
  return (
    <>
      <section className="m-auto wt-20 flex ">
        <div className="m-y-2 bg-black-2 flex flex-column items-start pd-6">
          <div className="text-s text-bold">
            <span>Filter</span>
          </div>

          <div className="flex flex-column items-start ">
            <label for="High" className="">
              <input
                type="checkbox"
                name="Filter"
                id="High"
                onChange={() => {
                  filterDispatch({ type: "HIGH" });
                }}
              />
              High
            </label>

            <label for="Medium">
              <input
                type="checkbox"
                name="Filter"
                id="Medium"
                onChange={() => {
                  filterDispatch({ type: "MEDIUM" });
                }}
              />
              Medium
            </label>

            <label for="Low">
              <input
                type="checkbox"
                name="Filter"
                id="Low"
                onChange={() => {
                  filterDispatch({ type: "LOW" });
                }}
              />
              Low
            </label>
          </div>
        </div>
        <div className="m-y-2 bg-black-2 flex flex-column items-start pd-5">
          <div className="text-s text-bold">
            <span>SortBy</span>
          </div>
          <div className="flex flex-column">
            <label for="Older">
              <input
                type="radio"
                name="Sort"
                id="Older"
                value="older"
                onChange={(e) => {
                  filterDispatch({ type: "SORT", payload: e.target.value });
                }}
              />
              Older
            </label>

            <label for="Latest">
              <input
                type="radio"
                name="Sort"
                id="Latest"
                value="latest"
                onChange={(e) => {
                  filterDispatch({ type: "SORT", payload: e.target.value });
                }}
              />
              Latest
            </label>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
export default Filter;
