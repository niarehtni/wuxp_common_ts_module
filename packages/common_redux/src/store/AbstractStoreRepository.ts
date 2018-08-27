import {StoreRepository} from "./StoreRepository";
import ReducerRegistry from "../registry/ReducerRegistry";
import {Store} from "redux";


/**
 *
 */
export default abstract class AbstractStoreRepository<T> implements StoreRepository<T> {


    protected store: Store<T>;


    constructor() {
        ReducerRegistry.storeRepository = this;
    }

    abstract init: (...args) => Store<T>;


    getStore = (): Store<T> => this.store;


}