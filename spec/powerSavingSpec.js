describe("PowerSavingUnit", () => {
  let testPSUnit1 = new PowerSavingUnit;
  let testPSUnit2 = new PowerSavingUnit;

  it("is on by default", () => {
    expect(testPSUnit2.isActive()).toBeTrue();
  });

  it("can be turned off", () => {
    testPSUnit1.switchOff();

    expect(testPSUnit1.isActive()).toBeFalse();
  });

  it("can be turned on", () => {
    testPSUnit1.switchOff();
    testPSUnit1.switchOn();

    expect(testPSUnit1.isActive()).toBeTrue();
  });
});
