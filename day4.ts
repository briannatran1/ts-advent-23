type Address = { address: string; city: string };
type PresentDeliveryList<T> = {[S in keyof T]: Address};
