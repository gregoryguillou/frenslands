import type { Building } from "../model/building";

export const allBuildings: Building[] = [
    {
        id: 1,
        name: "Cabin",
        category: "Housing",
        description: "A small cabin to house your first fren. Fixing it will bring 2 new frens into your community.",
        level: 1,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 0,
                new_pop: 2
            },
            {
                level: 2,
                resources: [],
                frensCoins: 0,
                energy: 0,
                pop_min: 0,
                new_pop: 0
            },
        ],
    },
    {
        id: 2,
        name: "Rock",
        category: "Resource",
        description: "Rocks can be harvested 3 times. You need to have one fren available to harvest a rock.",
        level: 0,
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            },
            {
                level: 2,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            },
            {
                level: 3,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 1,
                new_pop: 0
            },
            {
                level: 2,
                resources: [
                    {
                        id: 2,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 1,
                new_pop: 0
            },
            {
                level: 3,
                resources: [
                    {
                        id: 2,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 1,
                new_pop: 0
            }
        ],
    },
    {
        id: 3,
        name: "Tree",
        category: "Resource",
        description: "Trees can be harvested 3 times. You need to have one fren available to harvest a tree.",
        level: 0,
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            },
            {
                level: 2,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            },
            {
                level: 3,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 1,
                new_pop: 0
            },
            {
                level: 2,
                resources: [
                    {
                        id: 1,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 1,
                new_pop: 0
            },
            {
                level: 3,
                resources: [
                    {
                        id: 1,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 1,
                new_pop: 0
            }
        ],
    },
    {
        id: 4,
        name: "House",
        category: "Housing",
        description: "Houses bring new frens into your community.",
        level: 2,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 3
                    },
                    {
                        id: 2,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 0,
                new_pop: 2
            }
        ],
    },
    {
        id: 5,
        name: "Appartment",
        category: "Housing",
        description: "Appartments bring new frens into your community.",
        level: 7,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 10
                    },
                    {
                        id: 2,
                        qty: 7
                    },
                    {
                        id: 3,
                        qty: 4
                    },
                    {
                        id: 10,
                        qty: 5
                    }
                ],
                frensCoins: 5,
                energy: 0,
                pop_min: 0,
                new_pop: 6
            }
        ],
    },
    {
        id: 6,
        name: "Hotel",
        category: "Housing",
        description: "Hotels attracts new frens into your community.",
        level: 8,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 22
                    },
                    {
                        id: 3,
                        qty: 12
                    },
                    {
                        id: 6,
                        qty: 24
                    },
                    {
                        id: 10,
                        qty: 16
                    },
                    {
                        id: 11,
                        qty: 12
                    }
                ],
                frensCoins: 16,
                energy: 12,
                pop_min: 7,
                new_pop: 28
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 7
                    },
                    {
                        id: 10,
                        qty: 3
                    },
                    {
                        id: 11,
                        qty: 3
                    }
                ],
                frensCoins: 3,
                energy: 3,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 10,
                        qty: 12
                    }
                ],
                frensCoins: 12,
                energy: 0,
            }
        ],
    },
    {
        id: 7,
        name: "Bakery",
        category: "Shops",
        description: "Which fren doesn't like to eat a croissant or a pain au chocolat for breakfast ? Having a bakery led by a renowned French baker will attract new frens into your community.",
        level: 3,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 3
                    },
                    {
                        id: 2,
                        qty: 7
                    },
                    {
                        id: 3,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 2,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 1
                    },
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 10,
                        qty: 3
                    }
                ],
                frensCoins: 3,
                energy: 0,
            }
        ],
    },
    {
        id: 8,
        name: "Grocery shop",
        category: "Shops",
        description: "Everything you need is in the grocery shop.",
        level: 3,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 10
                    },
                    {
                        id: 2,
                        qty: 5
                    },
                    {
                        id: 3,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 2,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 11,
                        qty: 1
                    },
                    {
                        id: 3,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 1,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 10,
                        qty: 4
                    }
                ],
                frensCoins: 4,
                energy: 0,
            }
        ],
    },
    {
        id: 9,
        name: "Restaurant",
        category: "Shops",
        description: "A nice restaurant for your frens.",
        level: 5,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 11
                    },
                    {
                        id: 2,
                        qty: 13
                    },
                    {
                        id: 3,
                        qty: 6
                    },
                    {
                        id: 6,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 4,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 3
                    },
                    {
                        id: 10,
                        qty: 2
                    },
                ],
                frensCoins: 2,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 10,
                        qty: 4
                    }
                ],
                frensCoins: 4,
                energy: 0,
            }
        ],
    },
    {
        id: 10,
        name: "Mall",
        category: "Shops",
        description: "Lorem ipsum dolor sit amet.",
        level: 8,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 28
                    },
                    {
                        id: 3,
                        qty: 35
                    },
                    {
                        id: 6,
                        qty: 42
                    },
                    {
                        id: 10,
                        qty: 32
                    },
                    {
                        id: 11,
                        qty: 17
                    }
                ],
                frensCoins: 32,
                energy: 17,
                pop_min: 16,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 25
                    },
                    {
                        id: 10,
                        qty: 7
                    },
                    {
                        id: 11,
                        qty: 5
                    },
                ],
                frensCoins: 7,
                energy: 5,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 10,
                        qty: 55
                    }
                ],
                frensCoins: 55,
                energy: 0,
            }
        ],
    },
    {
        id: 11,
        name: "Bar",
        category: "Entertainment",
        description: "Lorem ipsum dolor sit amet.",
        level: 5,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 10
                    },
                    {
                        id: 2,
                        qty: 11
                    },
                    {
                        id: 3,
                        qty: 7
                    },
                    {
                        id: 6,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 4,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 2
                    },
                    {
                        id: 10,
                        qty: 1
                    },
                ],
                frensCoins: 1,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 10,
                        qty: 3
                    }
                ],
                frensCoins: 3,
                energy: 0,
            }
        ],
    },
    {
        id: 12,
        name: "Library",
        category: "Entertainment",
        description: "Sundays can be spent peacefully at the library.",
        level: 7,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 22
                    },
                    {
                        id: 2,
                        qty: 13
                    },
                    {
                        id: 3,
                        qty: 12
                    },
                    {
                        id: 6,
                        qty: 8
                    },
                    {
                        id: 10,
                        qty: 15
                    },
                    {
                        id: 11,
                        qty: 8
                    }
                ],
                frensCoins: 15,
                energy: 8,
                pop_min: 8,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 6
                    },
                    {
                        id: 10,
                        qty: 2
                    },
                    {
                        id: 11,
                        qty: 3
                    },
                ],
                frensCoins: 2,
                energy: 3,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 10,
                        qty: 10
                    }
                ],
                frensCoins: 10,
                energy: 0,
            }
        ],
    },
    {
        id: 13,
        name: "Swimming Pool",
        category: "Entertainment",
        description: "Sundays can be spent peacefully at the library.",
        level: 8,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 5
                    },
                    {
                        id: 3,
                        qty: 8
                    },
                    {
                        id: 6,
                        qty: 12
                    },
                    {
                        id: 10,
                        qty: 18
                    },
                    {
                        id: 11,
                        qty: 7
                    }
                ],
                frensCoins: 18,
                energy: 7,
                pop_min: 4,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 5
                    },
                    {
                        id: 10,
                        qty: 5
                    },
                    {
                        id: 11,
                        qty: 5
                    },
                ],
                frensCoins: 5,
                energy: 5,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 10,
                        qty: 25
                    }
                ],
                frensCoins: 25,
                energy: 0,
            }
        ],
    },
    {
        id: 14,
        name: "Cinema",
        category: "Entertainment",
        description: "Lorem ipsum",
        level: 8,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 7
                    },
                    {
                        id: 2,
                        qty: 26
                    },
                    {
                        id: 6,
                        qty: 21
                    },
                    {
                        id: 10,
                        qty: 22
                    }
                ],
                frensCoins: 22,
                energy: 0,
                pop_min: 6,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 5,
                        qty: 5
                    },
                    {
                        id: 10,
                        qty: 5
                    },
                    {
                        id: 11,
                        qty: 5
                    },
                ],
                frensCoins: 5,
                energy: 5,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 10,
                        qty: 25
                    }
                ],
                frensCoins: 25,
                energy: 0,
            }
        ],
    },
    {
        id: 15,
        name: "Market",
        category: "Shop",
        description: "Lorem ipsum",
        level: 7,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 7
                    },
                    {
                        id: 2,
                        qty: 9
                    },
                    {
                        id: 3,
                        qty: 11
                    },
                    {
                        id: 6,
                        qty: 12
                    },
                    {
                        id: 10,
                        qty: 27
                    }
                ],
                frensCoins: 27,
                energy: 0,
                pop_min: 12,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 6
                    },
                    {
                        id: 10,
                        qty: 3
                    },
                    {
                        id: 11,
                        qty: 3
                    },
                ],
                frensCoins: 3,
                energy: 3,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 4
                    },
                    {
                        id: 2,
                        qty: 4
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
    },
    {
        id: 16,
        name: "Wheat Farm",
        category: "Agriculture",
        description: "Lorem ipsum",
        level: 2,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 10
                    },
                    {
                        id: 2,
                        qty: 3
                    },
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 5,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 3
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
    },
    {
        id: 17,
        name: "Vegetable Farm",
        category: "Agriculture",
        description: "Lorem ipsum",
        level: 7,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 10
                    },
                    {
                        id: 2,
                        qty: 7
                    },
                    {
                        id: 3,
                        qty: 5
                    },
                    {
                        id: 10,
                        qty: 3
                    }
                ],
                frensCoins: 3,
                energy: 0,
                pop_min: 7,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 1
                    },
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 4
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
    },
    {
        id: 18,
        name: "Cow Farm",
        category: "Agriculture",
        description: "Lorem ipsum",
        level: 4,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 14
                    },
                    {
                        id: 2,
                        qty: 5
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 5,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 5
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
    },
    {
        id: 19,
        name: "Tree Farm",
        category: "Agriculture",
        description: "Lorem ipsum",
        level: 4,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 12
                    },
                    {
                        id: 2,
                        qty: 15
                    },
                    {
                        id: 3,
                        qty: 14
                    },
                    {
                        id: 6,
                        qty: 5
                    },
                    {
                        id: 10,
                        qty: 8
                    },
                ],
                frensCoins: 8,
                energy: 0,
                pop_min: 9,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 5
                    },
                    {
                        id: 10,
                        qty: 1
                    },
                    {
                        id: 11,
                        qty: 1
                    }
                ],
                frensCoins: 1,
                energy: 1,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 7
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
    },
    {
        id: 20,
        name: "Mine",
        category: "Mining",
        description: "Lorem ipsum",
        level: 0,
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            },
            {
                level: 2,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            },
            {
                level: 3,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 1
                    },
                    {
                        id: 6,
                        qty: 2
                    },
                    {
                        id: 8,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 3,
                new_pop: 0
            },
            {
                level: 2,
                resources: [
                    {
                        id: 2,
                        qty: 1
                    },
                    {
                        id: 6,
                        qty: 2
                    },
                    {
                        id: 8,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 3,
                new_pop: 0
            },
            {
                level: 3,
                resources: [
                    {
                        id: 2,
                        qty: 1
                    },
                    {
                        id: 6,
                        qty: 2
                    },
                    {
                        id: 8,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 3,
                new_pop: 0
            }
        ],
    },
    {
        id: 21,
        name: "Coal Plant",
        category: "Energy",
        description: "Lorem ipsum",
        level: 3,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 10
                    },
                    {
                        id: 3,
                        qty: 4
                    },
                    {
                        id: 8,
                        qty: 4
                    },
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 3,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    },
                    {
                        id: 8,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 11,
                        qty: 3
                    }
                ],
                frensCoins: 0,
                energy: 3,
            }
        ]
    },
    {
        id: 22,
        name: "Police Station",
        category: "Security",
        description: "Lorem ipsum",
        level: 6,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 10
                    },
                    {
                        id: 3,
                        qty: 3
                    },
                    {
                        id: 6,
                        qty: 11
                    },
                    {
                        id: 10,
                        qty: 21
                    },
                ],
                frensCoins: 21,
                energy: 0,
                pop_min: 3,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 2
                    },
                    {
                        id: 10,
                        qty: 2
                    },
                    {
                        id: 11,
                        qty: 1
                    }
                ],
                frensCoins: 2,
                energy: 1,
            }
        ]
    },
    {
        id: 23,
        name: "Hospital",
        category: "Security",
        description: "Lorem ipsum",
        level: 7,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 9
                    },
                    {
                        id: 2,
                        qty: 43
                    },
                    {
                        id: 3,
                        qty: 36
                    },
                    {
                        id: 6,
                        qty: 33
                    },
                    {
                        id: 10,
                        qty: 32
                    },
                    {
                        id: 11,
                        qty: 19
                    },
                ],
                frensCoins: 32,
                energy: 19,
                pop_min: 20,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 13
                    },
                    {
                        id: 10,
                        qty: 4
                    },
                    {
                        id: 11,
                        qty: 2
                    }
                ],
                frensCoins: 4,
                energy: 2,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 10,
                        qty: 25
                    }
                ],
                frensCoins: 25,
                energy: 0,
            }
        ]
    },
    {
        id: 24,
        name: "Lab",
        category: "Research",
        description: "Lorem ipsum",
        level: 8,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 30
                    },
                    {
                        id: 3,
                        qty: 42
                    },
                    {
                        id: 6,
                        qty: 56
                    },
                    {
                        id: 10,
                        qty: 54
                    },
                    {
                        id: 11,
                        qty: 25
                    },
                ],
                frensCoins: 54,
                energy: 25,
                pop_min: 15,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 3
                    },
                    {
                        id: 10,
                        qty: 2
                    },
                ],
                frensCoins: 2,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 11,
                        qty: 5
                    }
                ],
                frensCoins: 0,
                energy: 5,
            }
        ]
    },
    {
        id: 25,
        name: "Coal Mine",
        category: "Mining",
        description: "Lorem ipsum",
        level: 5,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 12
                    },
                    {
                        id: 2,
                        qty: 3
                    },
                    {
                        id: 6,
                        qty: 5
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 3,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 1
                    },
                    {
                        id: 10,
                        qty: 1
                    }
                ],
                frensCoins: 1,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 1
                    },
                    {
                        id: 8,
                        qty: 2
                    },
                ],
                frensCoins: 0,
                energy: 0,
            }
        ]
    },
    {
        id: 26,
        name: "Metal Mine",
        category: "Mining",
        description: "Lorem ipsum",
        level: 5,
        cost_update: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 12
                    },
                    {
                        id: 2,
                        qty: 3
                    },
                    {
                        id: 6,
                        qty: 5
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 3,
                new_pop: 0
            }
        ],
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 1
                    },
                    {
                        id: 10,
                        qty: 1
                    }
                ],
                frensCoins: 1,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 2,
                        qty: 1
                    },
                    {
                        id: 6,
                        qty: 2
                    },
                ],
                frensCoins: 0,
                energy: 0,
            }
        ]
    },
    {
        id: 27,
        name: "Bush",
        category: "Resource",
        description: "Lorem ipsum",
        level: 0,
        daily_cost: [
            {
                level: 1,
                resources: [
                    {
                        id: 1,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            },
            {
                level: 2,
                resources: [
                    {
                        id: 1,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            },
            {
                level: 3,
                resources: [
                    {
                        id: 1,
                        qty: 1
                    }
                ],
                frensCoins: 0,
                energy: 0,
            }
        ],
        daily_harvest: [
            {
                level: 1,
                resources: [
                    {
                        id: 3,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 1,
                new_pop: 0
            },
            {
                level: 2,
                resources: [
                    {
                        id: 3,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 1,
                new_pop: 0
            },
            {
                level: 3,
                resources: [
                    {
                        id: 3,
                        qty: 2
                    }
                ],
                frensCoins: 0,
                energy: 0,
                pop_min: 1,
                new_pop: 0
            }
        ],
    },

]