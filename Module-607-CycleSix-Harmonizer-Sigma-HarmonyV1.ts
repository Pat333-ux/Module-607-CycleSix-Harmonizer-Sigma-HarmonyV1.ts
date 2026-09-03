export const harmonizeSigmaV1 = (state, lanes) =>
  lanes
    .map(l => l.toHarmonyV1())
    .sort((a, b) => a.lane.localeCompare(b.lane))
    .reduce((acc, curr) => acc.absorb(curr), state.initHarmony("Sigma"));
