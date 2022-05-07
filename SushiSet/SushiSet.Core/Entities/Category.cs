﻿using SushiSet.Core.Entities.Base;

using System.Collections.Generic;

namespace SushiSet.Core.Entities
{
    public class Category : Entity
    {
        public string Name { get; set; }

        public bool TakesPartInSandbox { get; set; }

        public ICollection<Item> Items { get; set; } = new List<Item>();
    }
}
