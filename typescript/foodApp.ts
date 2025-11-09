{
  interface MenuItem {
    name: string;
    price: number;
  }
  interface Order {
    id: number;
    food: string;
    status: "ordered" | "completed";
  }
  const menu: MenuItem[] = [
    { name: "Masala Dosa", price: 8 },
    { name: "Chicken Briyani", price: 10 },
    { name: "Means", price: 10 },
    { name: "Beef", price: 9 },
  ];
  let cashInRegister = 0;
  let orderQueue: Order[] = [];
  let nextOrderId = 1;

  function addNewFood(foodName:MenuItem) {
    menu.push(foodName);
  }
  function placeOrder(foodName: string): Order | null {
        const item = menu.find(m => m.name === foodName);
        if (!item) {
            console.error(`${foodName} not found in menu`);
            return null;
        }

        cashInRegister += item.price;

        const order: Order = {
            id: nextOrderId++,
            food: item.name,
            status: 'ordered'
        };

        orderQueue.push(order);
        return order;
    }

  console.log(placeOrder("Masala Dosa"));
  // console.log(cashInRegister);

  /**
   * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
   * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
   * return the found order from the function.
   *
   * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
   */

  function completeOrder(orderId : number) {
    const correctOrder = orderQueue.find((o) => o.id === orderId);
    if (!correctOrder) {
      console.log(`Order with ID ${orderId} not found`);
      return null;
    }
   correctOrder.status = "completed";
    return orderId;
  }

  console.log(completeOrder(1));

  addNewFood({ name: "Alfarm", price: 8 });
  completeOrder(1);
  console.log("Menu", menu);
  console.log("Cash in register:", cashInRegister);
  console.log("Order queue:", orderQueue);
}
