describe("Thermostat", () => {
  let testThermostat;

  beforeEach(() => {
    testThermostat = new Thermostat;
  });

  describe("PowerSaving", () => {
    it("can be toggled off", () => {
      testThermostat.togglePowerSaving()
      expect(testThermostat.powerSavingStatus()).toEqual(false)
    });

    it("can be toggled on", () => {
      testThermostat.togglePowerSaving()
      testThermostat.togglePowerSaving()
      expect(testThermostat.powerSavingStatus()).toEqual(true)
    });

    it("goes back down to 25 when power saving turned from off to on", () => {
      testThermostat.togglePowerSaving()
      for (let i = 0; i < 7; i++) {
        testThermostat.increase()
      }
      testThermostat.togglePowerSaving()
      expect(testThermostat.getCurrentTemperature()).toEqual(25)
    });

  });

  describe("Temperature", () => {
    describe("Maximum", () => {
      it("has a maximum of 25 when power saving is on", () => {
        expect(testThermostat.getMaximumTemperature()).toEqual(25)
      });

      it("has a maximum of 32 when power saving is off", () => {
        testThermostat.togglePowerSaving()

        expect(() => {testThermostat.increase(10)}).not.toThrowError()
      })
    });

    it("has a minimum of 20", () => {
      expect(testThermostat.getMinimumTemperature()).toEqual(10);
    });

    describe(".increase", () => {
      it("can be increased by 10", () => {
        for (let i = 0; i < 5; i++) {
          testThermostat.increase()
        }

        expect(testThermostat.getCurrentTemperature()).toEqual(25)
      });

      it("can be increased by 8", () => {
        for (let i = 0; i < 3; i++) {
          testThermostat.increase()
        }

        expect(testThermostat.getCurrentTemperature()).toEqual(23)
      });

      it("cannot be increased more than maximum temperature", () => {
        expect(() => {
          for (let i = 0; i < 6; i++) {
            testThermostat.increase()
          }
        }).toThrow("Cannot exceed maximum temperature");
      });
    });

    describe(".decrease", () => {
      it("can be descreased by 5", () => {
        for (let i = 0; i < 5; i++) {
          testThermostat.decrease()
        }

        expect(testThermostat.getCurrentTemperature()).toEqual(15)
      });

      it("can be descreased by 9", () => {
        for (let i = 0; i < 9; i++) {
          testThermostat.decrease()
        }

        expect(testThermostat.getCurrentTemperature()).toEqual(11)
      });

      it("cannot be decreased more than minimum temperature", () => {
        expect(() => {
          for (let i = 0; i < 11; i++) {
            testThermostat.decrease()
          }
        }).toThrow("Cannot go lower than minimum temperature");
      });
    });

    describe(".reset", () => {
      it("sets the thermostat back to 20", () => {
        for (let i = 0; i < 3; i++) {
          testThermostat.increase();
        }
        testThermostat.reset();

        expect(testThermostat.getCurrentTemperature()).toBe(20);
      })
    })
  });

  describe("energy usage", () => {
    it("should return 'low-usage' when temperature is less than 18", () => {
      for (let i = 0; i < 5; i++) {
        testThermostat.decrease();
      }
      expect(testThermostat.energyUsage()).toEqual("Low-usage");
    })

    it("should return 'medium-usage' when temperature is less than 25", () => {
      expect(testThermostat.energyUsage()).toEqual("Medium-usage");
    })

    it("should return 'high-usage' when temperature is 25 or more", () => {
      testThermostat.togglePowerSaving();

      for (let i = 0; i < 7; i++) {
        testThermostat.increase();
      }
      expect(testThermostat.energyUsage()).toEqual("High-usage");
    })
  });
});
